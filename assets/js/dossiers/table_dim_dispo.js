/**
 * app-ecommerce-order-list Script
 */

"use strict";

$(function () {
  var dt_dim_dispo_datatable = $(".datatables-dim-dispo"),
    facture = {
      0: { value: 0, label: "FACTURE NON PAYE" },
      1: { value: 1, label: "FACTURE OK" },
      2: { value: 2, label: "FACTURE 2" },
      3: { value: 3, label: "FACTURE 3 OK" },
    };

  if (dt_dim_dispo_datatable.length) {
    dt_dim_dispo = dt_dim_dispo_datatable.DataTable({
      ajax: assetsPath + "json/dossiers/dim_dispo.json",
      columns: [
        { data: "" },
        { data: "" },
        { data: "date" },
        { data: "societe" },
        { data: "telephone" },
        { data: "facture" },
        { data: "adresse" },
        { data: "status" },
      ],
      columnDefs: [
        {
          className: "control",
          searchable: false,
          orderable: false,
          responsivePriority: 2,
          targets: 0,
          render: function (data, type, full, meta) {
            return "";
          },
        },
        {
          targets: 1,
          render: function (data, type, full, meta) {
            var $id = full["id"],
              $output =
                '<a href="/pages/voir-dossier.html?id=' +
                $id +
                '" class="btn btn-icon btn-primary waves-effect waves-light">' +
                '<span class="ti ti-eye"></span>' +
                "</a>";
            return $output;
          },
        },
        {
          targets: 2,
          render: function (data, type, full, meta) {
            var date = new Date(full.date);

            var formattedDate = date.toLocaleDateString("fr-FR", {
              month: "short",
              day: "numeric",
              year: "numeric",
              time: "numeric",
            });
            return '<span class="text-nowrap">' + formattedDate + "</span>";
          },
        },
        {
          targets: 3,
          render: function (data, type, full, meta) {
            var $soc = full["societe"],
              $output =
                ' <span class="badge rounded-pill bg-label-primary">' +
                $soc +
                "</span>";
            return $output;
          },
        },
        {
          targets: 4,
          render: function (data, type, full, meta) {
            var $phone = full["phoneNumber"],
              $output = '<a href="tel:' + $phone + '">' + $phone + "</a>";
            return $output;
          },
        },
        {
          targets: 5,
          render: function (data, type, full, meta) {
            var $output =
                '<select id="select2Facture" class="select2 form-select" data-allow-clear="true">',
              $selected = full["facture"];

            // Loop through the tech object to generate option elements
            for (var key in facture) {
              if (facture.hasOwnProperty(key)) {
                $output +=
                  '<option value="' +
                  facture[key].value +
                  '" ' +
                  ($selected == facture[key].value ? "selected" : "") +
                  ">" +
                  facture[key].label +
                  "</option>";
              }
            }

            $output += "</select>";

            return $output;
          },
        },
        {
          targets: 7,
          render: function (data, type, full, meta) {
            var $status = full["status"],
              $output =
                ' <span class="badge rounded-pill bg-label-success">' +
                $status +
                "</span>";
            return $output
          },
        },
      ],
      order: [3, "asc"],
      dom:
        '<"card-header pb-md-2 d-flex flex-column flex-md-row align-items-start align-items-md-center"<f><"d-flex align-items-md-center justify-content-md-end mt-2 mt-md-0 gap-2"l<"dt-action-buttons"B>>' +
        ">t" +
        '<"row mx-2"' +
        '<"col-sm-12 col-md-6"i>' +
        '<"col-sm-12 col-md-6"p>' +
        ">",
      lengthMenu: [7, 10, 15, 30, 60],
      language: {
        sEmptyTable: "Aucune donnée disponible dans le tableau",
        sInfo: "Affichage de l'élément _START_ à _END_ sur _TOTAL_ éléments",
        sInfoEmpty: "Affichage de l'élément 0 à 0 sur 0 élément",
        sInfoFiltered: "(filtré à partir de _MAX_ éléments au total)",
        sInfoPostFix: "",
        sInfoThousands: ",",
        sLengthMenu: "Afficher _MENU_ éléments",
        sLoadingRecords: "Chargement...",
        sProcessing: "Traitement...",
        sSearch: "",
        sZeroRecords: "Aucun résultat trouvé",
        oPaginate: {
          sFirst: "Premier",
          sLast: "Dernier",
          sNext: "Suivant",
          sPrevious: "Précédent",
        },
        oAria: {
          sSortAscending: ": activer pour trier la colonne par ordre croissant",
          sSortDescending:
            ": activer pour trier la colonne par ordre décroissant",
        },
        searchPlaceholder: "Chercher..",
      },
      buttons: [
        {
          extend: "collection",
          className: "btn btn-label-secondary dropdown-toggle",
          text: '<i class="ti ti-download me-1"></i>Export',
          buttons: [
            {
              extend: "print",
              text: '<i class="ti ti-printer me-2"></i>Print',
              className: "dropdown-item",
              exportOptions: {
                columns: [2, 3, 4, 5, 6, 7],
                format: {
                  body: function (inner, coldex, rowdex) {
                    if (inner.length <= 0) return inner;
                    var el = $.parseHTML(inner);
                    var result = "";
                    $.each(el, function (index, item) {
                      if (
                        item.classList !== undefined &&
                        item.classList.contains("order-name")
                      ) {
                        result = result + item.lastChild.firstChild.textContent;
                      } else if (item.innerText === undefined) {
                        result = result + item.textContent;
                      } else result = result + item.innerText;
                    });
                    return result;
                  },
                },
              },
              customize: function (win) {
                // Customize print view for dark
                $(win.document.body)
                  .css("color", headingColor)
                  .css("border-color", borderColor)
                  .css("background-color", bodyBg);
                $(win.document.body)
                  .find("table")
                  .addClass("compact")
                  .css("color", "inherit")
                  .css("border-color", "inherit")
                  .css("background-color", "inherit");
              },
            },
            {
              extend: "csv",
              text: '<i class="ti ti-file me-2"></i>Csv',
              className: "dropdown-item",
              exportOptions: {
                columns: [2, 3, 4, 5, 6, 7],
                format: {
                  body: function (inner, coldex, rowdex) {
                    if (inner.length <= 0) return inner;
                    var el = $.parseHTML(inner);
                    var result = "";
                    $.each(el, function (index, item) {
                      if (
                        item.classList !== undefined &&
                        item.classList.contains("order-name")
                      ) {
                        result = result + item.lastChild.firstChild.textContent;
                      } else if (item.innerText === undefined) {
                        result = result + item.textContent;
                      } else result = result + item.innerText;
                    });
                    return result;
                  },
                },
              },
            },
            {
              extend: "excel",
              text: '<i class="ti ti-file-export me-2"></i>Excel',
              className: "dropdown-item",
              exportOptions: {
                columns: [2, 3, 4, 5, 6, 7],
                format: {
                  body: function (inner, coldex, rowdex) {
                    if (inner.length <= 0) return inner;
                    var el = $.parseHTML(inner);
                    var result = "";
                    $.each(el, function (index, item) {
                      if (
                        item.classList !== undefined &&
                        item.classList.contains("order-name")
                      ) {
                        result = result + item.lastChild.firstChild.textContent;
                      } else if (item.innerText === undefined) {
                        result = result + item.textContent;
                      } else result = result + item.innerText;
                    });
                    return result;
                  },
                },
              },
            },
            {
              extend: "pdf",
              text: '<i class="ti ti-file-text me-2"></i>Pdf',
              className: "dropdown-item",
              exportOptions: {
                columns: [2, 3, 4, 5, 6, 7],
                format: {
                  body: function (inner, coldex, rowdex) {
                    if (inner.length <= 0) return inner;
                    var el = $.parseHTML(inner);
                    var result = "";
                    $.each(el, function (index, item) {
                      if (
                        item.classList !== undefined &&
                        item.classList.contains("order-name")
                      ) {
                        result = result + item.lastChild.firstChild.textContent;
                      } else if (item.innerText === undefined) {
                        result = result + item.textContent;
                      } else result = result + item.innerText;
                    });
                    return result;
                  },
                },
              },
            },
            {
              extend: "copy",
              text: '<i class="ti ti-copy me-2"></i>Copy',
              className: "dropdown-item",
              exportOptions: {
                columns: [2, 3, 4, 5, 6, 7],
                format: {
                  body: function (inner, coldex, rowdex) {
                    if (inner.length <= 0) return inner;
                    var el = $.parseHTML(inner);
                    var result = "";
                    $.each(el, function (index, item) {
                      if (
                        item.classList !== undefined &&
                        item.classList.contains("order-name")
                      ) {
                        result = result + item.lastChild.firstChild.textContent;
                      } else if (item.innerText === undefined) {
                        result = result + item.textContent;
                      } else result = result + item.innerText;
                    });
                    return result;
                  },
                },
              },
            },
          ],
        },
      ],
      responsive: {
        details: {
          display: $.fn.dataTable.Responsive.display.modal({
            header: function (row) {
              var data = row.data();
              return "Details de dossier #" + data["id"];
            },
          }),
          type: "column",
          renderer: function (api, rowIdx, columns) {
            var data = $.map(columns, function (col, i) {
              return col.title !== "" // ? Do not show row in modal popup if title is blank (for check box)
                ? '<tr data-dt-row="' +
                    col.rowIndex +
                    '" data-dt-column="' +
                    col.columnIndex +
                    '">' +
                    "<td>" +
                    col.title +
                    ":" +
                    "</td> " +
                    "<td>" +
                    col.data +
                    "</td>" +
                    "</tr>"
                : "";
            }).join("");

            return data
              ? $('<table class="table"/><tbody />').append(data)
              : false;
          },
        },
      },
    });
  }
  // Delete Record
  $(".datatables-dim-dispo tbody").on("click", ".delete-record", function () {
    dt_products.row($(this).parents("tr")).remove().draw();
  });

  setTimeout(() => {
    $(".dataTables_filter .form-control").removeClass("form-control-sm");
    $(".dataTables_length .form-select").removeClass("form-select-sm");
  }, 300);

  const selectPicker = $(".selectpicker"),
    select2 = $(".select2");

  if (selectPicker.length) {
    selectPicker.selectpicker();
  }

  if (select2.length) {
    select2.each(function () {
      var $this = $(this);
      $this.wrap('<div class="position-relative"></div>').select2({
        placeholder: "Select value",
        dropdownParent: $this.parent(),
      });
    });
  }
});
