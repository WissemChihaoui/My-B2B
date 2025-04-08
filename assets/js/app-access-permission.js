/**
 * App user list (jquery)
 */

'use strict';

$(function () {
  var dataTablePermissions = $('.datatables-permissions'),
    dt_permission,
    userList = 'app-user-list.html';

  // Users List datatable
  if (dataTablePermissions.length) {
    dt_permission = dataTablePermissions.DataTable({
      ajax: assetsPath + 'json/permissions-list.json', // JSON file to add data
      columns: [
        // columns according to JSON
        { data: '' },
        { data: 'id' },
        { data: 'name' },
        { data: 'assigned_to' },
        
        { data: '' }
      ],
      columnDefs: [
        {
          // For Responsive
          className: 'control',
          orderable: false,
          searchable: false,
          responsivePriority: 2,
          targets: 0,
          render: function (data, type, full, meta) {
            return '';
          }
        },
        {
          targets: 1,
          searchable: false,
          visible: false
        },
        {
          // Name
          targets: 2,
          render: function (data, type, full, meta) {
            var $name = full['name'];
            return '<span class="text-nowrap">' + $name + '</span>';
          }
        },
        {
          targets: 3,
          orderable: false,
          render: function (data, type, full, meta) {
            var $assignedTo = full['assigned_to'];
            var roleOptions = {
              Admin: 'Admin',
              Partenaire: 'Partenaire',
              Regie: 'Régie',
              Ingenieur: 'Ingénieur'
            };
            var $output = '<select multiple class="selectpicker w-100" data-style="btn-default">';
            for (var role in roleOptions) {
              if (roleOptions.hasOwnProperty(role)) {
                var selected = $assignedTo.includes(role) ? 'selected' : '';
                $output += '<option value="' + role + '" ' + selected + '>' + roleOptions[role] + '</option>';
              }
            }
            $output += '</select>';
            return $output;
          }
        }
        ,
        
        
        {
          // Actions
          targets: -1,
          searchable: false,
          title: 'Actions',
          orderable: false,
          render: function (data, type, full, meta) {
            return (
              '<span class="text-nowrap"><button class="btn btn-sm btn-icon me-2" data-bs-target="#editPermissionModal" data-bs-toggle="modal" data-bs-dismiss="modal"><i class="ti ti-edit"></i></button>' +
              '<button class="btn btn-sm btn-icon delete-record"><i class="ti ti-trash"></i></button></span>'
            );
          }
        }
      ],
      order: [[1, 'asc']],
      lengthMenu: [20, 50, 70, 100],
      dom:
        '<"row mx-1"' +
        '<"col-sm-12 col-md-3" l>' +
        '<"col-sm-12 col-md-9"<"dt-action-buttons text-xl-end text-lg-start text-md-end text-start d-flex align-items-center justify-content-md-end justify-content-center flex-wrap me-1"<"me-3"f>>>' +
        '>t' +
        '<"row mx-2"' +
        '<"col-sm-12 col-md-6"i>' +
        '<"col-sm-12 col-md-6"p>' +
        '>',
        language: {
          sEmptyTable:     "Aucune donnée disponible dans le tableau",
          sInfo:           "Affichage de l'élément _START_ à _END_ sur _TOTAL_ éléments",
          sInfoEmpty:      "Affichage de l'élément 0 à 0 sur 0 élément",
          sInfoFiltered:   "(filtré à partir de _MAX_ éléments au total)",
          sInfoPostFix:    "",
          sInfoThousands:  ",",
          sLengthMenu:     "Afficher _MENU_ éléments",
          sLoadingRecords: "Chargement...",
          sProcessing:     "Traitement...",
          sSearch:         "",
          sZeroRecords:    "Aucun résultat trouvé",
          oPaginate: {
              sFirst:    "Premier",
              sLast:     "Dernier",
              sNext:     "Suivant",
              sPrevious: "Précédent"
          },
          oAria: {
              sSortAscending:  ": activer pour trier la colonne par ordre croissant",
              sSortDescending: ": activer pour trier la colonne par ordre décroissant"
          },
          searchPlaceholder: "Chercher.."
      },
      // Buttons with Dropdown
      buttons: {},
      // For responsive popup
      responsive: {
        details: {
          display: $.fn.dataTable.Responsive.display.modal({
            header: function (row) {
              var data = row.data();
              return 'Details of ' + data['name'];
            }
          }),
          type: 'column',
          renderer: function (api, rowIdx, columns) {
            var data = $.map(columns, function (col, i) {
              return col.title !== '' // ? Do not show row in modal popup if title is blank (for check box)
                ? '<tr data-dt-row="' +
                    col.rowIndex +
                    '" data-dt-column="' +
                    col.columnIndex +
                    '">' +
                    '<td>' +
                    col.title +
                    ':' +
                    '</td> ' +
                    '<td>' +
                    col.data +
                    '</td>' +
                    '</tr>'
                : '';
            }).join('');

            return data ? $('<table class="table"/><tbody />').append(data) : false;
          }
        }
      },
      initComplete: function () {

        const selectPicker = $('.selectpicker');
  
        if (selectPicker.length) {
          selectPicker.selectpicker();
        }

 
        // Adding role filter once table initialized
        this.api()
          .columns(3)
          .every(function () {
            var column = this;
            var select = $(
              '<select id="UserRole" class="form-select text-capitalize"><option value=""> Select Role </option></select>'
            )
              .appendTo('.user_role')
              .on('change', function () {
                var val = $.fn.dataTable.util.escapeRegex($(this).val());
                column.search(val ? '^' + val + '$' : '', true, false).draw();
              });

            column
              .data()
              .unique()
              .sort()
              .each(function (d, j) {
                select.append('<option value="' + d + '" class="text-capitalize">' + d + '</option>');
              });
          });
      }
    });
  }

  // Delete Record
  $('.datatables-permissions tbody').on('click', '.delete-record', function () {
    dt_permission.row($(this).parents('tr')).remove().draw();
  });

  // Filter form control to default size
  // ? setTimeout used for multilingual table initialization
  setTimeout(() => {
    $('.dataTables_filter .form-control').removeClass('form-control-sm');
    $('.dataTables_length .form-select').removeClass('form-select-sm');
  }, 300);

 
});
