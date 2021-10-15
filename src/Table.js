import React from "react";
import "./table.css";
export default function Table() {
  (function ($, window, document, undefined) {
    var pluginName = "editable",
      defaults = {
        keyboard: true,
        dblclick: true,
        button: true,
        buttonSelector: ".edit",
        maintainWidth: true,
        dropdowns: {},
        edit: function () {},
        save: function () {},
        cancel: function () {},
      };

    function editable(element, options) {
      this.element = element;
      this.options = $.extend({}, defaults, options);

      this._defaults = defaults;
      this._name = pluginName;

      this.init();
    }

    editable.prototype = {
      init: function () {
        this.editing = false;

        if (this.options.dblclick) {
          $(this.element)
            .css("cursor", "pointer")
            .bind("dblclick", this.toggle.bind(this));
        }

        if (this.options.button) {
          $(this.options.buttonSelector, this.element).bind(
            "click",
            this.toggle.bind(this)
          );
        }
      },

      toggle: function (e) {
        e.preventDefault();

        this.editing = !this.editing;

        if (this.editing) {
          this.edit();
        } else {
          this.save();
        }
      },

      edit: function () {
        var instance = this,
          values = {};

        $("td[data-field]", this.element).each(function () {
          var input,
            field = $(this).data("field"),
            value = $(this).text(),
            width = $(this).width();

          values[field] = value;

          $(this).empty();

          if (instance.options.maintainWidth) {
            $(this).width(width);
          }
          input = $('<input type="text" />')
            .val(value)
            .data("old-value", value)
            .dblclick(instance._captureEvent);

          input.appendTo(this);

          if (instance.options.keyboard) {
            input.keydown(instance._captureKey.bind(instance));
          }
        });

        this.options.edit.bind(this.element)(values);
      },

      save: function () {
        var instance = this,
          values = {};

        $("td[data-field]", this.element).each(function () {
          var value = $(":input", this).val();

          values[$(this).data("field")] = value;

          $(this).empty().text(value);
        });

        this.options.save.bind(this.element)(values);
      },

      cancel: function () {
        var instance = this,
          values = {};

        $("td[data-field]", this.element).each(function () {
          var value = $(":input", this).data("old-value");

          values[$(this).data("field")] = value;

          $(this).empty().text(value);
        });

        this.options.cancel.bind(this.element)(values);
      },

      _captureEvent: function (e) {
        e.stopPropagation();
      },

      _captureKey: function (e) {
        if (e.which === 13) {
          this.editing = false;
          this.save();
        } else if (e.which === 27) {
          this.editing = false;
          this.cancel();
        }
      },
    };

    $.fn[pluginName] = function (options) {
      return this.each(function () {
        if (!$.data(this, "plugin_" + pluginName)) {
          $.data(this, "plugin_" + pluginName, new editable(this, options));
        }
      });
    };
  })(jQuery, window, document);

  editTable();

  function editTable() {
    $(function () {
      $("table tr").editable({
        edit: function (values) {
          $(".edit i", this)
            .removeClass("fa-pencil")
            .addClass("fa-save")
            .attr("title", "Save");
        },
        save: function (values) {
          $(".edit i", this)
            .removeClass("fa-save")
            .addClass("fa-pencil")
            .attr("title", "Edit");
        },
        cancel: function (values) {
          $(".edit i", this)
            .removeClass("fa-save")
            .addClass("fa-pencil")
            .attr("title", "Edit");
        },
      });
    });
  }
  return (
    <>
      <div className="table-container" id="editableTable">
        <div className="title-wrapper d-flex">
          <div className="title-text">Text</div>
          <div className="wrapper-btn">
            <button className="title-btn">text</button>
            <button className="title-btn">text</button>
            <button className="title-btn">text</button>
            <button className="title-btn">text</button>
          </div>
        </div>
        <div className="ac-wrapper">
          <div className="ac-name">
            <h6>
              Ac Name : <span className="text-primary">ABC</span>
            </h6>
            <h6>Ac Number : 4031</h6>
          </div>
          <div className="date-wrapper">
            <div className="p-2 bd-highlight">
              From Date: <input type="date" /> &nbsp;&nbsp;&nbsp;ToDate:{" "}
              <input type="date" />
            </div>
          </div>
        </div>

        <table className="table secondary mt-3">
          <thead>
            <tr>
              <th scope="col">text</th>
              <th scope="col">text</th>
              <th scope="col">text</th>
              <th scope="col">text</th>
              <th scope="col">text</th>
              <th scope="col">text</th>
              <th scope="col">text</th>
              <th scope="col">text</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr data-id="1">
              <td data-field="name"></td>
              <td data-field="name">text</td>
              <td data-field="name">text</td>
              <td data-field="name">text</td>
              <td data-field="name">text</td>
              <td data-field="name">text</td>
              <td data-field="name">text</td>
              <td data-field="name">text</td>
              <td>
                <a className="button button-small edit" title="Edit">
                  <i className="fa fa-pencil"></i>
                </a>{" "}
              </td>
            </tr>
            <tr data-id="2">
              <td data-field="name"></td>
              <td data-field="name">text</td>
              <td data-field="name">text</td>
              <td data-field="name">text</td>
              <td data-field="name">text</td>
              <td data-field="name">text</td>
              <td data-field="name">text</td>
              <td data-field="name">text</td>
              <td>
                <a className="button button-small edit" title="Edit">
                  <i className="fa fa-pencil"></i>
                </a>{" "}
              </td>
            </tr>
            <tr data-id="3">
              <td data-field="name"></td>
              <td data-field="name">text</td>
              <td data-field="name">text</td>
              <td data-field="name">text</td>
              <td data-field="name">text</td>
              <td data-field="name">text</td>
              <td data-field="name">text</td>
              <td data-field="name">text</td>
              <td>
                <a className="button button-small edit" title="Edit">
                  <i className="fa fa-pencil"></i>
                </a>{" "}
              </td>
            </tr>
            <tr data-id="4">
              <td data-field="name"></td>
              <td data-field="name">text</td>
              <td data-field="name">text</td>
              <td data-field="name">text</td>
              <td data-field="name">text</td>
              <td data-field="name">text</td>
              <td data-field="name">text</td>
              <td data-field="name">text</td>
              <td>
                <a className="button button-small edit" title="Edit">
                  <i className="fa fa-pencil"></i>
                </a>{" "}
              </td>
            </tr>
            <tr data-id="5">
              <td data-field="name">123</td>
              <td data-field="name">text</td>
              <td data-field="name">text</td>
              <td data-field="name">text</td>
              <td data-field="name">text</td>
              <td data-field="name">text</td>
              <td data-field="name">text</td>
              <td data-field="name">text</td>
              <td>
                <a className="button button-small edit" title="Edit">
                  <i className="fa fa-pencil"></i>
                </a>{" "}
              </td>
            </tr>
          </tbody>
        </table>
        <div className="total-wrapper">
          <div className="total">300.00</div>
          <div className="total">45.50.000 </div>
          <div className="total">TOTAL</div>
          <div className="total">1520.60</div>
          <div className="total">12.38.000</div>
        </div>
      </div>
    </>
  );
}
