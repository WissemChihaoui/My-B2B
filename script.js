"use strict";

let fv, offCanvasEl;
document.addEventListener("DOMContentLoaded", function (e) {
  (function () {
    const formAddNewRecord = document.getElementById("form-add-new-superAdmin");

    setTimeout(() => {
      const newRecord = document.querySelector(".create-new-superAdmin"),
        offCanvasElement = document.querySelector("#add-new-superAdmin");

      // To open offCanvas, to add new record
      if (newRecord) {
        newRecord.addEventListener("click", function () {
          offCanvasEl = new bootstrap.Offcanvas(offCanvasElement);
          // Empty fields on offCanvas open
          (offCanvasElement.querySelector(".dt-full-name").value = ""),
            (offCanvasElement.querySelector(".dt-post").value = ""),
            (offCanvasElement.querySelector(".dt-email").value = ""),
            (offCanvasElement.querySelector(".dt-date").value = ""),
            (offCanvasElement.querySelector(".dt-salary").value = "");
          // Open offCanvas with form
          offCanvasEl.show();
        });
      }
    }, 200);

    setTimeout(() => {
      const modifyRecord = document.querySelector(".create-new-technicien"),
        offCanvasElement = document.querySelector("#add-new-technicien");

      // To open offCanvas, to modify record
      if (modifyRecord) {
        modifyRecord.addEventListener("click", function () {
          offCanvasEl = new bootstrap.Offcanvas(offCanvasElement);
          // Empty fields on offCanvas open
          (offCanvasElement.querySelector(".dt-full-name").value = "Example "),
            (offCanvasElement.querySelector(".dt-post").value = "22"),
            (offCanvasElement.querySelector(".dt-email").value = ""),
            (offCanvasElement.querySelector(".dt-date").value = ""),
            (offCanvasElement.querySelector(".dt-salary").value = "");
          // Open offCanvas with form
          offCanvasEl.show();
        });
      }
    }, 200);

    setTimeout(() => {
      const newTechnicien = document.querySelector(".create-new-ing"),
        offCanvasElement = document.querySelector("#add-new-ing");

      // To open offCanvas, to modify record
      if (newTechnicien) {
        newTechnicien.addEventListener("click", function () {
          offCanvasEl = new bootstrap.Offcanvas(offCanvasElement);
          // Empty fields on offCanvas open
          (offCanvasElement.querySelector(".dt-full-name").value = ""),
            (offCanvasElement.querySelector(".dt-post").value = ""),
            (offCanvasElement.querySelector(".dt-email").value = ""),
            (offCanvasElement.querySelector(".dt-date").value = ""),
            (offCanvasElement.querySelector(".dt-salary").value = "");
          // Open offCanvas with form
          offCanvasEl.show();
        });
      }
    }, 200);

    setTimeout(() => {
      const addRegie = document.querySelector(".create-new-regie"),
        offCanvasElement = document.querySelector("#add-new-regie");

      // To open offCanvas, to modify record
      if (addRegie) {
        addRegie.addEventListener("click", function () {
          offCanvasEl = new bootstrap.Offcanvas(offCanvasElement);
          // Empty fields on offCanvas open
          (offCanvasElement.querySelector(".dt-full-name").value = ""),
            (offCanvasElement.querySelector(".dt-post").value = ""),
            (offCanvasElement.querySelector(".dt-email").value = ""),
            (offCanvasElement.querySelector(".dt-date").value = ""),
            (offCanvasElement.querySelector(".dt-salary").value = "");
          // Open offCanvas with form
          offCanvasEl.show();
        });
      }
    }, 200);

    setTimeout(() => {
      const addRegie = document.querySelector(".create-new-deleg"),
        offCanvasElement = document.querySelector("#add-new-deleg");

      // To open offCanvas, to modify record
      if (addRegie) {
        addRegie.addEventListener("click", function () {
          offCanvasEl = new bootstrap.Offcanvas(offCanvasElement);
          // Empty fields on offCanvas open
          (offCanvasElement.querySelector(".dt-full-name").value = ""),
            (offCanvasElement.querySelector(".dt-post").value = ""),
            (offCanvasElement.querySelector(".dt-email").value = ""),
            (offCanvasElement.querySelector(".dt-date").value = ""),
            (offCanvasElement.querySelector(".dt-salary").value = "");
          // Open offCanvas with form
          offCanvasEl.show();
        });
      }
    }, 200);

    // Form validation for Add new record
    fv = FormValidation.formValidation(formAddNewRecord, {
      fields: {
        basicFullname: {
          validators: {
            notEmpty: {
              message: "Champ Requis",
            },
          },
        },
        basicPost: {
          validators: {
            notEmpty: {
              message: "Champ Requis",
            },
          },
        },
        basicEmail: {
          validators: {
            notEmpty: {
              message: "Champ Requis",
            },
            emailAddress: {
              message: "Besoin un valid email",
            },
          },
        },
        psw: {
          validators: {
            notEmpty: {
              message: "Champ Requis",
            },
            stringLength: {
              min: 8,
              max: 30,
              inclusive: true,
              message: "Mot de passe doit être entre 8 et 30 chiffres",
            },
          },
        },

        phoneNumber: {
          validators: {
            notEmpty: {
              message: "Champ Requis",
            },
            numeric: {
              message: "Besoin un valid numéro",
            },
          },
        },

        adresse: {
          validators: {
            notEmpty: {
              message: "Champ Requis",
            },
          },
        },
      },
      plugins: {
        trigger: new FormValidation.plugins.Trigger(),
        bootstrap5: new FormValidation.plugins.Bootstrap5({
          // Use this for enabling/changing valid/invalid class
          // eleInvalidClass: '',
          eleValidClass: "",
          rowSelector: ".col-sm-12",
        }),
        submitButton: new FormValidation.plugins.SubmitButton(),
        // defaultSubmit: new FormValidation.plugins.DefaultSubmit(),
        autoFocus: new FormValidation.plugins.AutoFocus(),
      },
      init: (instance) => {
        instance.on("plugins.message.placed", function (e) {
          if (e.element.parentElement.classList.contains("input-group")) {
            e.element.parentElement.insertAdjacentElement(
              "afterend",
              e.messageElement
            );
          }
        });
      },
    });
  })();
});

$(document).ready(function () {
  // Event listener for tab clicks
  $(".nav-link").on("click", function (e) {
    e.preventDefault();
    var targetTable = $(this).data("tab");

    // Hide all tables
    $(".table-content").removeClass("active").hide();

    // Show the selected table
    $(targetTable).addClass("active").show();
  });

  // Simulate a click on the first tab when the page loads
});

$(document).ready(function () {
  $(".editTypes").on("click", function (e) {
    e.preventDefault();
    // do this first
    var inputFields = $(".typeLabel");
    inputFields.prop("readonly", true);
    inputFields.removeClass("form-control").addClass("form-control-plaintext");
    // then this
    var parentRow = $(this).closest("tr");
    var inputField = parentRow.find(".typeLabel");
    console.log(inputField.prop("readonly"));
    inputField.prop("readonly", false);
    inputField.removeClass("form-control-plaintext").addClass("form-control");
  });
});

$(document).ready(function () {
  console.log("Doc is here");
  $("#validationCheck").change(function () {
    var isChecked = $(this).is(":checked");
    if (!isChecked) {
      $(".valider-btn").addClass("disabled").prop("disabled", true);
    } else {
      $(".valider-btn").removeClass("disabled").prop("disabled", false);
    }
  });

  var dt_product_table = $(".datatables-products");
  if (dt_product_table.length) {
    var dt_products = dt_product_table.DataTable({
      order: [[3, "desc"]],
      scrollX: true,
      language: {
        lengthMenu: "Afficher _MENU_ Lines",
        loadingRecords: "Chargement...",
        emptyTable: "Aucune Donnée Disponible",
      },
      lengthMenu: [7, 10, 20, 50, 70, 100],
      dom:
        '<"card-header d-flex border-top rounded-0 flex-wrap py-2"f' +
        '<"me-5 ms-n2 pe-5">' +
        '<"d-flex justify-content-start justify-content-md-end align-items-baseline"<"dt-action-buttons d-flex flex-column align-items-start align-items-md-center justify-content-sm-center mb-3 mb-md-0 pt-0 gap-4 gap-sm-0 flex-sm-row"lB>>' +
        ">t" +
        '<"row mx-2"' +
        '<"col-sm-12 col-md-6"i>' +
        '<"col-sm-12 col-md-6"p>' +
        ">",
      oLanguage: {
        sSearch: "Rechercher",
      },
      buttons: [
        {
          extend: "collection",
          className: "btn btn-label-secondary dropdown-toggle ms-3",
          text: '<i class="ti ti-download me-1 ti-xs"></i>Exporter',
          buttons: [
            {
              extend: "print",
              text: '<i class="ti ti-printer me-2" ></i>Imprimer',
              className: "dropdown-item",
              exportOptions: {
                columns: [1, 2, 3, 4, 5, 6, 7],
                format: {
                  body: function (inner, coldex, rowdex) {
                    if (inner.length <= 0) return inner;
                    var el = $.parseHTML(inner);
                    var result = "";
                    $.each(el, function (index, item) {
                      if (
                        item.classList !== undefined &&
                        item.classList.contains("product-name")
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
              text: '<i class="ti ti-file me-2" ></i>CSV',
              className: "dropdown-item",
              exportOptions: {
                columns: [1, 2, 3, 4, 5, 6, 7],
                format: {
                  body: function (inner, coldex, rowdex) {
                    if (inner.length <= 0) return inner;
                    var el = $.parseHTML(inner);
                    var result = "";
                    $.each(el, function (index, item) {
                      if (
                        item.classList !== undefined &&
                        item.classList.contains("product-name")
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
                columns: [1, 2, 3, 4, 5, 6, 7],
                format: {
                  body: function (inner, coldex, rowdex) {
                    if (inner.length <= 0) return inner;
                    var el = $.parseHTML(inner);
                    var result = "";
                    $.each(el, function (index, item) {
                      if (
                        item.classList !== undefined &&
                        item.classList.contains("product-name")
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
              text: '<i class="ti ti-file-text me-2"></i>PDF',
              className: "dropdown-item",
              exportOptions: {
                columns: [1, 2, 3, 4, 5, 6, 7],
                format: {
                  body: function (inner, coldex, rowdex) {
                    if (inner.length <= 0) return inner;
                    var el = $.parseHTML(inner);
                    var result = "";
                    $.each(el, function (index, item) {
                      if (
                        item.classList !== undefined &&
                        item.classList.contains("product-name")
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
              text: '<i class="ti ti-copy me-2"></i>Copier',
              className: "dropdown-item",
              exportOptions: {
                columns: [1, 2, 3, 4, 5, 6, 7],
                format: {
                  body: function (inner, coldex, rowdex) {
                    if (inner.length <= 0) return inner;
                    var el = $.parseHTML(inner);
                    var result = "";
                    $.each(el, function (index, item) {
                      if (
                        item.classList !== undefined &&
                        item.classList.contains("product-name")
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
    });
  }

  var dt_priseRdv_table = $(".datatables-priseRdv");
  if (dt_priseRdv_table.length) {
    const dt_priseRdv = dt_priseRdv_table.DataTable({
      order: [[1, "asc"]],
      scrollX: true,
      language: {
        lengthMenu: "Afficher _MENU_ Lines",
        loadingRecords: "Chargement...",
        emptyTable: "Aucune Donnée Disponible",
      },
      lengthMenu: [7, 10, 20, 50, 70, 100],
      // ajax: assetsPath + 'json/table-datatable.json',
      // columns: [
      //   {data:'id'},
      //   {data:'creation_date'},
      //   {data:'client_name'},
      //   {data:'adresse'},
      //   {data:'dpt'},
      //   {data:'client'},
      //   {data:'phone'},
      //   {data:'fiche'},
      //   {data: null,
      //     defaultContent: '<button class="action-btn">Action</button>'
      //   },
      // ],

      columnDefs: [
        {
          targets: [0, -1],
          searchable: false,
          orderable: false,
        },
      ],
      dom:
        '<"card-header d-flex border-top rounded-0 flex-wrap py-2"f' +
        '<"me-5 ms-n2 pe-5">' +
        '<"d-flex justify-content-start justify-content-md-end align-items-baseline"<"dt-action-buttons d-flex flex-column align-items-start align-items-md-center justify-content-sm-center mb-3 mb-md-0 pt-0 gap-4 gap-sm-0 flex-sm-row"lB>>' +
        ">t" +
        '<"row mx-2"' +
        '<"col-sm-12 col-md-6"i>' +
        '<"col-sm-12 col-md-6"p>' +
        ">",
      oLanguage: {
        sSearch: "Rechercher",
      },
      buttons: [
        {
          extend: "collection",
          className: "btn btn-label-secondary dropdown-toggle ms-3",
          text: '<i class="ti ti-download me-1 ti-xs"></i>Exporter',
          buttons: [
            {
              extend: "print",
              text: '<i class="ti ti-printer me-2" ></i>Imprimer',
              className: "dropdown-item",
              exportOptions: {
                columns: [1, 2, 3, 4, 5, 6, 7],
                format: {
                  body: function (inner, coldex, rowdex) {
                    if (inner.length <= 0) return inner;
                    var el = $.parseHTML(inner);
                    var result = "";
                    $.each(el, function (index, item) {
                      if (
                        item.classList !== undefined &&
                        item.classList.contains("product-name")
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
              text: '<i class="ti ti-file me-2" ></i>CSV',
              className: "dropdown-item",
              exportOptions: {
                columns: [1, 2, 3, 4, 5, 6, 7],
                format: {
                  body: function (inner, coldex, rowdex) {
                    if (inner.length <= 0) return inner;
                    var el = $.parseHTML(inner);
                    var result = "";
                    $.each(el, function (index, item) {
                      if (
                        item.classList !== undefined &&
                        item.classList.contains("product-name")
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
                columns: [1, 2, 3, 4, 5, 6, 7],
                format: {
                  body: function (inner, coldex, rowdex) {
                    if (inner.length <= 0) return inner;
                    var el = $.parseHTML(inner);
                    var result = "";
                    $.each(el, function (index, item) {
                      if (
                        item.classList !== undefined &&
                        item.classList.contains("product-name")
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
              text: '<i class="ti ti-file-text me-2"></i>PDF',
              className: "dropdown-item",
              exportOptions: {
                columns: [1, 2, 3, 4, 5, 6, 7],
                format: {
                  body: function (inner, coldex, rowdex) {
                    if (inner.length <= 0) return inner;
                    var el = $.parseHTML(inner);
                    var result = "";
                    $.each(el, function (index, item) {
                      if (
                        item.classList !== undefined &&
                        item.classList.contains("product-name")
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
              text: '<i class="ti ti-copy me-2"></i>Copier',
              className: "dropdown-item",
              exportOptions: {
                columns: [1, 2, 3, 4, 5, 6, 7],
                format: {
                  body: function (inner, coldex, rowdex) {
                    if (inner.length <= 0) return inner;
                    var el = $.parseHTML(inner);
                    var result = "";
                    $.each(el, function (index, item) {
                      if (
                        item.classList !== undefined &&
                        item.classList.contains("product-name")
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
    });
  }
});
let count = 0;
const previewTemplate = `<div class="dz-preview dz-file-preview">
<div class="dz-details">
  <div class="dz-thumbnail">
    <img data-dz-thumbnail>
    <span class="dz-nopreview">No preview</span>
    <div class="dz-success-mark"></div>
    <div class="dz-error-mark"></div>
    <div class="dz-error-message"><span data-dz-errormessage></span></div>
    <div class="progress">
      <div class="progress-bar progress-bar-primary" role="progressbar" aria-valuemin="0" aria-valuemax="100" data-dz-uploadprogress></div>
    </div>
  </div>
  <div class="dz-filename" data-dz-name></div>
  <div class="dz-size" data-dz-size></div>
</div>
</div>`;
document.getElementById("addDoc").addEventListener("click", function () {
  // Create a new document area element
  var newDocumentArea = document.createElement("div");
  count++;
  newDocumentArea.classList.add("mb-3", "col-md-3", "col-12");

  // HTML content for the new document area
  newDocumentArea.innerHTML = `
  
  <div class="mb-3">
    <label class="form-label" for="nom-doc"
      >Nom du document</label
    >
    <input
      type="text"
      class="form-control"
      id="nom-doc"
      placeholder="Indiquez un nom du document"
      name="nomDoc"
      aria-label="nomDoc"
    />
  </div>
  <div class="mb-3">
    <label for="description" class="form-label"
      >Description</label
    >
    <textarea
      class="form-control"
      id="description"
      rows="3"
    ></textarea>
  </div>
  <form
  action="/upload"
  class="dropzone needsclick dropZoneArea"
  id="dropzone-basic${count}"
  >
  <div class="dz-message needsclick">
  Déposez les fichiers ici ou cliquez pour télécharger
  </div>
  <div class="fallback">
    <input name="file" type="file" />
  </div>
</form>
</div>

  `;
  // Create a delete button
  var deleteButton = document.createElement("button");
  deleteButton.innerHTML = '<span class="ti ti-trash"></span>';
  deleteButton.classList.add("btn", "btn-danger", "delete-doc", "mt-2");

  // Append the new document area to the container
  var documentAreaContainer = document.querySelector(".documentAreaContainer");
  documentAreaContainer.appendChild(newDocumentArea);
  newDocumentArea.appendChild(deleteButton);

  var dropzoneElements = newDocumentArea.querySelectorAll(".dropZoneArea");
  dropzoneElements.forEach(function (dropzoneElement) {
    if (dropzoneElement) {
      console.log(dropzoneElement);

      var myDropzone = new Dropzone(dropzoneElement, {
        previewTemplate: previewTemplate,
        parallelUploads: 1,
        maxFilesize: 5,
        addRemoveLinks: true,
        maxFiles: 1,
      });
    }
  });
  deleteButton.addEventListener("click", function () {
    documentAreaContainer.removeChild(newDocumentArea);
  });
});

$(".js-example-placeholder-multiple").select2({
  placeholder: "Choisir une option",
  allowClear: true,
});

// Toggle Status

function toggleButtons(clickedButton) {
  var buttons = clickedButton.parentElement.querySelectorAll("button");

  buttons.forEach(function (button) {
    button.classList.toggle("d-none");
  });
}
