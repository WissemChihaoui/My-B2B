$(function () {
  
    
  'use strict'


  var dt_audit_table = $('.datatable-audit')
  if (dt_audit_table.length) {
      var dt_audits = dt_audit_table.DataTable({
          order: [[0, 'asc']],
          // scrollX: true,
          language:{
            "lengthMenu":     "Afficher _MENU_ Lines",
            "loadingRecords": "Chargement...",
            "emptyTable":     "Aucune Donnée Disponible",
          },
          lengthMenu: [7, 10, 20, 50, 70, 100],
          dom: '<"card-header d-flex border-top rounded-0 flex-wrap py-2"f' +
                  '<"me-5 ms-n2 pe-5">' +
                  '<"d-flex justify-content-start justify-content-md-end align-items-baseline"<"dt-action-buttons d-flex flex-column align-items-start align-items-md-center justify-content-sm-center mb-3 mb-md-0 pt-0 gap-4 gap-sm-0 flex-sm-row"lB>>' +
                  '>t' +
                  '<"row mx-2"' +
                  '<"col-sm-12 col-md-6"i>' +
                  '<"col-sm-12 col-md-6"p>' +
                  '>',
                  oLanguage: {
                      "sSearch": "Rechercher"
                    },
          buttons: [
              {
                extend: 'collection',
                className: 'btn btn-label-secondary dropdown-toggle ms-3',
                text: '<i class="ti ti-download me-1 ti-xs"></i>Exporter',
                buttons: [
                  {
                    extend: 'print',
                    text: '<i class="ti ti-printer me-2" ></i>Imprimer',
                    className: 'dropdown-item',
                    exportOptions: {
                      columns: [1, 2, 3, 4, 5, 6, 7],
                      format: {
                        body: function (inner, coldex, rowdex) {
                          if (inner.length <= 0) return inner;
                          var el = $.parseHTML(inner);
                          var result = '';
                          $.each(el, function (index, item) {
                            if (item.classList !== undefined && item.classList.contains('product-name')) {
                              result = result + item.lastChild.firstChild.textContent;
                            } else if (item.innerText === undefined) {
                              result = result + item.textContent;
                            } else result = result + item.innerText;
                          });
                          return result;
                        }
                      }
                    },
                    customize: function (win) {
                      // Customize print view for dark
                      $(win.document.body)
                        .css('color', headingColor)
                        .css('border-color', borderColor)
                        .css('background-color', bodyBg);
                      $(win.document.body)
                        .find('table')
                        .addClass('compact')
                        .css('color', 'inherit')
                        .css('border-color', 'inherit')
                        .css('background-color', 'inherit');
                    }
                  },
                  {
                    extend: 'csv',
                    text: '<i class="ti ti-file me-2" ></i>CSV',
                    className: 'dropdown-item',
                    exportOptions: {
                      columns: [1, 2, 3, 4, 5, 6, 7],
                      format: {
                        body: function (inner, coldex, rowdex) {
                          if (inner.length <= 0) return inner;
                          var el = $.parseHTML(inner);
                          var result = '';
                          $.each(el, function (index, item) {
                            if (item.classList !== undefined && item.classList.contains('product-name')) {
                              result = result + item.lastChild.firstChild.textContent;
                            } else if (item.innerText === undefined) {
                              result = result + item.textContent;
                            } else result = result + item.innerText;
                          });
                          return result;
                        }
                      }
                    }
                  },
                  {
                    extend: 'excel',
                    text: '<i class="ti ti-file-export me-2"></i>Excel',
                    className: 'dropdown-item',
                    exportOptions: {
                      columns: [1, 2, 3, 4, 5, 6, 7],
                      format: {
                        body: function (inner, coldex, rowdex) {
                          if (inner.length <= 0) return inner;
                          var el = $.parseHTML(inner);
                          var result = '';
                          $.each(el, function (index, item) {
                            if (item.classList !== undefined && item.classList.contains('product-name')) {
                              result = result + item.lastChild.firstChild.textContent;
                            } else if (item.innerText === undefined) {
                              result = result + item.textContent;
                            } else result = result + item.innerText;
                          });
                          return result;
                        }
                      }
                    }
                  },
                  {
                    extend: 'pdf',
                    text: '<i class="ti ti-file-text me-2"></i>PDF',
                    className: 'dropdown-item',
                    exportOptions: {
                      columns: [1, 2, 3, 4, 5, 6, 7],
                      format: {
                        body: function (inner, coldex, rowdex) {
                          if (inner.length <= 0) return inner;
                          var el = $.parseHTML(inner);
                          var result = '';
                          $.each(el, function (index, item) {
                            if (item.classList !== undefined && item.classList.contains('product-name')) {
                              result = result + item.lastChild.firstChild.textContent;
                            } else if (item.innerText === undefined) {
                              result = result + item.textContent;
                            } else result = result + item.innerText;
                          });
                          return result;
                        }
                      }
                    }
                  },
                  {
                    extend: 'copy',
                    text: '<i class="ti ti-copy me-2"></i>Copier',
                    className: 'dropdown-item',
                    exportOptions: {
                      columns: [1, 2, 3, 4, 5, 6, 7],
                      format: {
                        body: function (inner, coldex, rowdex) {
                          if (inner.length <= 0) return inner;
                          var el = $.parseHTML(inner);
                          var result = '';
                          $.each(el, function (index, item) {
                            if (item.classList !== undefined && item.classList.contains('product-name')) {
                              result = result + item.lastChild.firstChild.textContent;
                            } else if (item.innerText === undefined) {
                              result = result + item.textContent;
                            } else result = result + item.innerText;
                          });
                          return result;
                        }
                      }
                    }
                  }
                ]
              },
                
              
            ],
      })
}
  var dt_product_table = $('.datatable-viewDoc')
  if (dt_product_table.length) {
      var dt_products = dt_product_table.DataTable({
          order: [[0, 'asc']],
          // scrollX: true,
          language:{
            "lengthMenu":     "Afficher _MENU_ Lines",
            "loadingRecords": "Chargement...",
            "emptyTable":     "Aucune Donnée Disponible",
          },
          lengthMenu: [7, 10, 20, 50, 70, 100],
          dom: '<"card-header d-flex border-top rounded-0 flex-wrap py-2"f' +
                  '<"me-5 ms-n2 pe-5">' +
                  '<"d-flex justify-content-start justify-content-md-end align-items-baseline"<"dt-action-buttons d-flex flex-column align-items-start align-items-md-center justify-content-sm-center mb-3 mb-md-0 pt-0 gap-4 gap-sm-0 flex-sm-row"lB>>' +
                  '>t' +
                  '<"row mx-2"' +
                  '<"col-sm-12 col-md-6"i>' +
                  '<"col-sm-12 col-md-6"p>' +
                  '>',
                  oLanguage: {
                      "sSearch": "Rechercher"
                    },
          buttons: [
              {
                extend: 'collection',
                className: 'btn btn-label-secondary dropdown-toggle ms-3',
                text: '<i class="ti ti-download me-1 ti-xs"></i>Exporter',
                buttons: [
                  {
                    extend: 'print',
                    text: '<i class="ti ti-printer me-2" ></i>Imprimer',
                    className: 'dropdown-item',
                    exportOptions: {
                      columns: [1, 2, 3, 4, 5, 6, 7],
                      format: {
                        body: function (inner, coldex, rowdex) {
                          if (inner.length <= 0) return inner;
                          var el = $.parseHTML(inner);
                          var result = '';
                          $.each(el, function (index, item) {
                            if (item.classList !== undefined && item.classList.contains('product-name')) {
                              result = result + item.lastChild.firstChild.textContent;
                            } else if (item.innerText === undefined) {
                              result = result + item.textContent;
                            } else result = result + item.innerText;
                          });
                          return result;
                        }
                      }
                    },
                    customize: function (win) {
                      // Customize print view for dark
                      $(win.document.body)
                        .css('color', headingColor)
                        .css('border-color', borderColor)
                        .css('background-color', bodyBg);
                      $(win.document.body)
                        .find('table')
                        .addClass('compact')
                        .css('color', 'inherit')
                        .css('border-color', 'inherit')
                        .css('background-color', 'inherit');
                    }
                  },
                  {
                    extend: 'csv',
                    text: '<i class="ti ti-file me-2" ></i>CSV',
                    className: 'dropdown-item',
                    exportOptions: {
                      columns: [1, 2, 3, 4, 5, 6, 7],
                      format: {
                        body: function (inner, coldex, rowdex) {
                          if (inner.length <= 0) return inner;
                          var el = $.parseHTML(inner);
                          var result = '';
                          $.each(el, function (index, item) {
                            if (item.classList !== undefined && item.classList.contains('product-name')) {
                              result = result + item.lastChild.firstChild.textContent;
                            } else if (item.innerText === undefined) {
                              result = result + item.textContent;
                            } else result = result + item.innerText;
                          });
                          return result;
                        }
                      }
                    }
                  },
                  {
                    extend: 'excel',
                    text: '<i class="ti ti-file-export me-2"></i>Excel',
                    className: 'dropdown-item',
                    exportOptions: {
                      columns: [1, 2, 3, 4, 5, 6, 7],
                      format: {
                        body: function (inner, coldex, rowdex) {
                          if (inner.length <= 0) return inner;
                          var el = $.parseHTML(inner);
                          var result = '';
                          $.each(el, function (index, item) {
                            if (item.classList !== undefined && item.classList.contains('product-name')) {
                              result = result + item.lastChild.firstChild.textContent;
                            } else if (item.innerText === undefined) {
                              result = result + item.textContent;
                            } else result = result + item.innerText;
                          });
                          return result;
                        }
                      }
                    }
                  },
                  {
                    extend: 'pdf',
                    text: '<i class="ti ti-file-text me-2"></i>PDF',
                    className: 'dropdown-item',
                    exportOptions: {
                      columns: [1, 2, 3, 4, 5, 6, 7],
                      format: {
                        body: function (inner, coldex, rowdex) {
                          if (inner.length <= 0) return inner;
                          var el = $.parseHTML(inner);
                          var result = '';
                          $.each(el, function (index, item) {
                            if (item.classList !== undefined && item.classList.contains('product-name')) {
                              result = result + item.lastChild.firstChild.textContent;
                            } else if (item.innerText === undefined) {
                              result = result + item.textContent;
                            } else result = result + item.innerText;
                          });
                          return result;
                        }
                      }
                    }
                  },
                  {
                    extend: 'copy',
                    text: '<i class="ti ti-copy me-2"></i>Copier',
                    className: 'dropdown-item',
                    exportOptions: {
                      columns: [1, 2, 3, 4, 5, 6, 7],
                      format: {
                        body: function (inner, coldex, rowdex) {
                          if (inner.length <= 0) return inner;
                          var el = $.parseHTML(inner);
                          var result = '';
                          $.each(el, function (index, item) {
                            if (item.classList !== undefined && item.classList.contains('product-name')) {
                              result = result + item.lastChild.firstChild.textContent;
                            } else if (item.innerText === undefined) {
                              result = result + item.textContent;
                            } else result = result + item.innerText;
                          });
                          return result;
                        }
                      }
                    }
                  }
                ]
              },
                
              
            ],
      })
}})