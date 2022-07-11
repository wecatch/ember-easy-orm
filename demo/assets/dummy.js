'use strict';



;define("dummy/app", ["exports", "@ember/application", "ember-resolver", "ember-load-initializers", "dummy/config/environment"], function (_exports, _application, _emberResolver, _emberLoadInitializers, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/application",0,"ember-resolver",0,"ember-load-initializers",0,"dummy/config/environment"eaimeta@70e063a35619d71f

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  class App extends _application.default {
    constructor() {
      super(...arguments);

      _defineProperty(this, "modulePrefix", _environment.default.modulePrefix);

      _defineProperty(this, "podModulePrefix", _environment.default.podModulePrefix);

      _defineProperty(this, "Resolver", _emberResolver.default);
    }

  }

  _exports.default = App;
  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);
});
;define("dummy/component-managers/glimmer", ["exports", "@glimmer/component/-private/ember-component-manager"], function (_exports, _emberComponentManager) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberComponentManager.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component/-private/ember-component-manager"eaimeta@70e063a35619d71f
});
;define("dummy/components/file-input", ["exports", "ember-semantic-ui/components/file-input"], function (_exports, _fileInput) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _fileInput.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-semantic-ui/components/file-input"eaimeta@70e063a35619d71f
});
;define("dummy/components/ui-animated-button", ["exports", "ember-semantic-ui/components/ui-animated-button"], function (_exports, _uiAnimatedButton) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _uiAnimatedButton.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-semantic-ui/components/ui-animated-button"eaimeta@70e063a35619d71f
});
;define("dummy/components/ui-button", ["exports", "ember-semantic-ui/components/ui-button"], function (_exports, _uiButton) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _uiButton.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-semantic-ui/components/ui-button"eaimeta@70e063a35619d71f
});
;define("dummy/components/ui-checkbox-group", ["exports", "ember-semantic-ui/components/ui-checkbox-group"], function (_exports, _uiCheckboxGroup) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _uiCheckboxGroup.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-semantic-ui/components/ui-checkbox-group"eaimeta@70e063a35619d71f
});
;define("dummy/components/ui-checkbox", ["exports", "ember-semantic-ui/components/ui-checkbox"], function (_exports, _uiCheckbox) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _uiCheckbox.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-semantic-ui/components/ui-checkbox"eaimeta@70e063a35619d71f
});
;define("dummy/components/ui-column", ["exports", "ember-semantic-ui/components/ui-column"], function (_exports, _uiColumn) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _uiColumn.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-semantic-ui/components/ui-column"eaimeta@70e063a35619d71f
});
;define("dummy/components/ui-container", ["exports", "ember-semantic-ui/components/ui-container"], function (_exports, _uiContainer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _uiContainer.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-semantic-ui/components/ui-container"eaimeta@70e063a35619d71f
});
;define("dummy/components/ui-date-input", ["exports", "ember-semantic-ui/components/ui-date-input"], function (_exports, _uiDateInput) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _uiDateInput.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-semantic-ui/components/ui-date-input"eaimeta@70e063a35619d71f
});
;define("dummy/components/ui-date-time-input", ["exports", "ember-semantic-ui/components/ui-date-time-input"], function (_exports, _uiDateTimeInput) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _uiDateTimeInput.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-semantic-ui/components/ui-date-time-input"eaimeta@70e063a35619d71f
});
;define("dummy/components/ui-dropdown-menu", ["exports", "ember-semantic-ui/components/ui-dropdown-menu"], function (_exports, _uiDropdownMenu) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _uiDropdownMenu.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-semantic-ui/components/ui-dropdown-menu"eaimeta@70e063a35619d71f
});
;define("dummy/components/ui-form-input", ["exports", "ember-semantic-ui/components/ui-form-input"], function (_exports, _uiFormInput) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _uiFormInput.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-semantic-ui/components/ui-form-input"eaimeta@70e063a35619d71f
});
;define("dummy/components/ui-form", ["exports", "ember-semantic-ui/components/ui-form"], function (_exports, _uiForm) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _uiForm.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-semantic-ui/components/ui-form"eaimeta@70e063a35619d71f
});
;define("dummy/components/ui-grid", ["exports", "ember-semantic-ui/components/ui-grid"], function (_exports, _uiGrid) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _uiGrid.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-semantic-ui/components/ui-grid"eaimeta@70e063a35619d71f
});
;define("dummy/components/ui-input-tags", ["exports", "ember-semantic-ui/components/ui-input-tags"], function (_exports, _uiInputTags) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _uiInputTags.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-semantic-ui/components/ui-input-tags"eaimeta@70e063a35619d71f
});
;define("dummy/components/ui-input", ["exports", "ember-semantic-ui/components/ui-input"], function (_exports, _uiInput) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _uiInput.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-semantic-ui/components/ui-input"eaimeta@70e063a35619d71f
});
;define("dummy/components/ui-label", ["exports", "ember-semantic-ui/components/ui-label"], function (_exports, _uiLabel) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _uiLabel.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-semantic-ui/components/ui-label"eaimeta@70e063a35619d71f
});
;define("dummy/components/ui-labeled-button", ["exports", "ember-semantic-ui/components/ui-labeled-button"], function (_exports, _uiLabeledButton) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _uiLabeledButton.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-semantic-ui/components/ui-labeled-button"eaimeta@70e063a35619d71f
});
;define("dummy/components/ui-labeled-input", ["exports", "ember-semantic-ui/components/ui-labeled-input"], function (_exports, _uiLabeledInput) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _uiLabeledInput.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-semantic-ui/components/ui-labeled-input"eaimeta@70e063a35619d71f
});
;define("dummy/components/ui-left-labeled-button", ["exports", "ember-semantic-ui/components/ui-left-labeled-button"], function (_exports, _uiLeftLabeledButton) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _uiLeftLabeledButton.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-semantic-ui/components/ui-left-labeled-button"eaimeta@70e063a35619d71f
});
;define("dummy/components/ui-menu", ["exports", "ember-semantic-ui/components/ui-menu"], function (_exports, _uiMenu) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _uiMenu.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-semantic-ui/components/ui-menu"eaimeta@70e063a35619d71f
});
;define("dummy/components/ui-message", ["exports", "ember-semantic-ui/components/ui-message"], function (_exports, _uiMessage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _uiMessage.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-semantic-ui/components/ui-message"eaimeta@70e063a35619d71f
});
;define("dummy/components/ui-modal-content", ["exports", "ember-semantic-ui/components/ui-modal-content"], function (_exports, _uiModalContent) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _uiModalContent.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-semantic-ui/components/ui-modal-content"eaimeta@70e063a35619d71f
});
;define("dummy/components/ui-modal-foot", ["exports", "ember-semantic-ui/components/ui-modal-foot"], function (_exports, _uiModalFoot) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _uiModalFoot.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-semantic-ui/components/ui-modal-foot"eaimeta@70e063a35619d71f
});
;define("dummy/components/ui-modal-title", ["exports", "ember-semantic-ui/components/ui-modal-title"], function (_exports, _uiModalTitle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _uiModalTitle.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-semantic-ui/components/ui-modal-title"eaimeta@70e063a35619d71f
});
;define("dummy/components/ui-modal", ["exports", "ember-semantic-ui/components/ui-modal"], function (_exports, _uiModal) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _uiModal.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-semantic-ui/components/ui-modal"eaimeta@70e063a35619d71f
});
;define("dummy/components/ui-multi-select", ["exports", "ember-semantic-ui/components/ui-multi-select"], function (_exports, _uiMultiSelect) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _uiMultiSelect.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-semantic-ui/components/ui-multi-select"eaimeta@70e063a35619d71f
});
;define("dummy/components/ui-pointing-label", ["exports", "ember-semantic-ui/components/ui-pointing-label"], function (_exports, _uiPointingLabel) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _uiPointingLabel.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-semantic-ui/components/ui-pointing-label"eaimeta@70e063a35619d71f
});
;define("dummy/components/ui-popup-content", ["exports", "ember-semantic-ui/components/ui-popup-content"], function (_exports, _uiPopupContent) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _uiPopupContent.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-semantic-ui/components/ui-popup-content"eaimeta@70e063a35619d71f
});
;define("dummy/components/ui-popup", ["exports", "ember-semantic-ui/components/ui-popup"], function (_exports, _uiPopup) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _uiPopup.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-semantic-ui/components/ui-popup"eaimeta@70e063a35619d71f
});
;define("dummy/components/ui-progress", ["exports", "ember-semantic-ui/components/ui-progress"], function (_exports, _uiProgress) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _uiProgress.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-semantic-ui/components/ui-progress"eaimeta@70e063a35619d71f
});
;define("dummy/components/ui-radio-group", ["exports", "ember-semantic-ui/components/ui-radio-group"], function (_exports, _uiRadioGroup) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _uiRadioGroup.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-semantic-ui/components/ui-radio-group"eaimeta@70e063a35619d71f
});
;define("dummy/components/ui-radio", ["exports", "ember-semantic-ui/components/ui-radio"], function (_exports, _uiRadio) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _uiRadio.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-semantic-ui/components/ui-radio"eaimeta@70e063a35619d71f
});
;define("dummy/components/ui-row", ["exports", "ember-semantic-ui/components/ui-row"], function (_exports, _uiRow) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _uiRow.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-semantic-ui/components/ui-row"eaimeta@70e063a35619d71f
});
;define("dummy/components/ui-segment", ["exports", "ember-semantic-ui/components/ui-segment"], function (_exports, _uiSegment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _uiSegment.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-semantic-ui/components/ui-segment"eaimeta@70e063a35619d71f
});
;define("dummy/components/ui-select", ["exports", "ember-semantic-ui/components/ui-select"], function (_exports, _uiSelect) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _uiSelect.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-semantic-ui/components/ui-select"eaimeta@70e063a35619d71f
});
;define("dummy/components/ui-tab-menu", ["exports", "ember-semantic-ui/components/ui-tab-menu"], function (_exports, _uiTabMenu) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _uiTabMenu.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-semantic-ui/components/ui-tab-menu"eaimeta@70e063a35619d71f
});
;define("dummy/components/ui-tab-segment", ["exports", "ember-semantic-ui/components/ui-tab-segment"], function (_exports, _uiTabSegment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _uiTabSegment.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-semantic-ui/components/ui-tab-segment"eaimeta@70e063a35619d71f
});
;define("dummy/components/ui-text-container", ["exports", "ember-semantic-ui/components/ui-text-container"], function (_exports, _uiTextContainer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _uiTextContainer.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-semantic-ui/components/ui-text-container"eaimeta@70e063a35619d71f
});
;define("dummy/components/ui-uploader", ["exports", "ember-semantic-ui/components/ui-uploader"], function (_exports, _uiUploader) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _uiUploader.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-semantic-ui/components/ui-uploader"eaimeta@70e063a35619d71f
});
;define("dummy/components/ui-vertical-menu", ["exports", "ember-semantic-ui/components/ui-vertical-menu"], function (_exports, _uiVerticalMenu) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _uiVerticalMenu.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-semantic-ui/components/ui-vertical-menu"eaimeta@70e063a35619d71f
});
;define("dummy/components/user-god/component", ["exports", "ember-easy-orm/mixins/form"], function (_exports, _form) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-easy-orm/mixins/form"eaimeta@70e063a35619d71f

  class UserGodComponent extends _form.GodForm {
    constructor() {
      super(...arguments);
      super.modelName = 'user';
    }

  }

  _exports.default = UserGodComponent;
});
;define("dummy/components/user-god/template", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/template-factory"eaimeta@70e063a35619d71f

  var _default = (0, _templateFactory.createTemplateFactory)({
    "id": "ishb5gsW",
    "block": "[[[10,0],[14,0,\"ui container\"],[12],[1,\"\\n    \"],[10,0],[14,0,\"ui grid\"],[12],[1,\"\\n        \"],[10,0],[14,0,\"row\"],[12],[1,\"\\n            \"],[11,\"button\"],[24,0,\"ui green button\"],[24,4,\"button\"],[4,[38,0],[\"click\",[30,0,[\"add\"]]],null],[12],[1,\"create\"],[13],[1,\"\\n        \"],[13],[1,\"\\n        \"],[10,0],[14,0,\"row\"],[12],[1,\"\\n\"],[41,[30,0,[\"modalShow\"]],[[[1,\"                \"],[8,[39,2],null,[[\"@model\",\"@cancel\",\"@success\",\"@fail\"],[[30,0,[\"selectedItem\"]],[30,0,[\"cancel\"]],[30,0,[\"success\"]],[30,0,[\"fail\"]]]],[[\"default\"],[[[],[]]]]],[1,\"\\n\"]],[]],null],[1,\"        \"],[13],[1,\"\\n        \"],[10,0],[14,0,\"row\"],[12],[1,\"\\n            \"],[10,0],[14,0,\"ui items\"],[12],[1,\"\\n\"],[42,[28,[37,4],[[28,[37,4],[[30,1]],null]],null],null,[[[1,\"                    \"],[10,0],[14,0,\"item\"],[12],[1,\"\\n                        \"],[10,0],[14,0,\"content\"],[12],[1,\"\\n                            \"],[10,0],[14,0,\"header\"],[12],[1,\"\\n                                \"],[1,[30,2,[\"name\"]]],[1,\"\\n                            \"],[13],[1,\"\\n                            \"],[10,0],[14,0,\"extra\"],[12],[1,\"\\n                                \"],[11,\"button\"],[24,0,\"ui button\"],[24,4,\"button\"],[4,[38,0],[\"click\",[28,[37,5],[[30,0,[\"edit\"]],[30,2]],null]],null],[12],[1,\"edit\"],[13],[1,\"\\n                                \"],[11,\"button\"],[24,0,\"ui button\"],[24,4,\"button\"],[4,[38,0],[\"click\",[28,[37,5],[[30,0,[\"remove\"]],[30,2]],null]],null],[12],[1,\"remove\"],[13],[1,\"\\n                            \"],[13],[1,\"\\n                        \"],[13],[1,\"\\n                    \"],[13],[1,\"\\n\"]],[2]],null],[1,\"            \"],[13],[1,\"\\n        \"],[13],[1,\"\\n    \"],[13],[1,\"\\n\"],[13],[1,\"\\n\\n\"]],[\"@model\",\"item\"],false,[\"on\",\"if\",\"user-item\",\"each\",\"-track-array\",\"fn\"]]",
    "moduleName": "dummy/components/user-god/template.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
;define("dummy/components/user-item/component", ["exports", "ember-easy-orm/mixins/form"], function (_exports, _form) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-easy-orm/mixins/form"eaimeta@70e063a35619d71f

  class UserItemComponent extends _form.Form {
    constructor() {
      super(...arguments);
      super.modelName = 'user';
    }

  }

  _exports.default = UserItemComponent;
});
;define("dummy/components/user-item/template", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/template-factory"eaimeta@70e063a35619d71f

  var _default = (0, _templateFactory.createTemplateFactory)({
    "id": "7Ce7U0vO",
    "block": "[[[10,\"form\"],[14,0,\"ui form\"],[12],[1,\"\\n    \"],[1,[30,0,[\"reason\"]]],[1,\"\\n    \"],[10,\"label\"],[14,\"for\",\"user-name\"],[12],[1,\"name\"],[13],[1,\"\\n    \"],[8,[39,0],[[24,1,\"user-name\"]],[[\"@type\",\"@value\"],[\"text\",[30,1,[\"name\"]]]],null],[1,\"\\n    \"],[10,0],[14,0,\"ui segment\"],[12],[1,\"\\n        \"],[11,\"button\"],[24,0,\"ui green button\"],[24,4,\"button\"],[4,[38,1],[\"click\",[30,0,[\"save\"]]],null],[12],[1,\"save\"],[13],[1,\"\\n        \"],[11,\"button\"],[24,0,\"ui button\"],[24,4,\"button\"],[4,[38,1],[\"click\",[30,0,[\"cancel\"]]],null],[12],[1,\"cancel\"],[13],[1,\"\\n\"],[41,[30,1,[\"_id\"]],[[[1,\"            \"],[11,\"button\"],[24,0,\"ui red button\"],[24,4,\"button\"],[4,[38,1],[\"click\",[30,0,[\"remove\"]]],null],[12],[1,\"delete\"],[13],[1,\"\\n\"]],[]],null],[1,\"    \"],[13],[1,\"\\n\\n\\n\"],[13]],[\"@model\"],false,[\"input\",\"on\",\"if\"]]",
    "moduleName": "dummy/components/user-item/template.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
;define("dummy/ember-easy-orm/form/controller", ["exports", "@ember/controller"], function (_exports, _controller) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/controller"eaimeta@70e063a35619d71f

  class FormController extends _controller.default {}

  _exports.default = FormController;
});
;define("dummy/ember-easy-orm/form/route", ["exports", "@ember/routing/route", "@ember/service"], function (_exports, _route, _service) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _class, _descriptor;

  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route",0,"@ember/service"eaimeta@70e063a35619d71f

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let IndexRoute = (_class = class IndexRoute extends _route.default {
    constructor() {
      super(...arguments);

      _initializerDefineProperty(this, "store", _descriptor, this);
    }

    model() {
      return this.store.find('user');
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "store", [_service.inject], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class);
  _exports.default = IndexRoute;
});
;define("dummy/ember-easy-orm/form/template", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/template-factory"eaimeta@70e063a35619d71f

  var _default = (0, _templateFactory.createTemplateFactory)({
    "id": "3wZmMA63",
    "block": "[[[8,[39,0],null,[[\"@model\"],[[30,1]]],[[\"default\"],[[[],[]]]]]],[\"@model\"],false,[\"user-god\"]]",
    "moduleName": "dummy/ember-easy-orm/form/template.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
;define("dummy/ember-easy-orm/index/controller", ["exports", "@ember/controller", "@ember/object", "@ember/service", "@glimmer/tracking", "dummy/config/environment"], function (_exports, _controller, _object, _service, _tracking, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _class, _descriptor, _descriptor2;

  0; //eaimeta@70e063a35619d71f0,"@ember/controller",0,"@ember/object",0,"@ember/service",0,"@glimmer/tracking",0,"dummy/config/environment"eaimeta@70e063a35619d71f

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  const rootURL = _environment.default.rootURL;
  let IndexController = (_class = class IndexController extends _controller.default {
    constructor() {
      super(...arguments);

      _defineProperty(this, "url", rootURL == '/' ? '/v1/user/1' : rootURL + '/v1/user/1');

      _initializerDefineProperty(this, "store", _descriptor, this);

      _initializerDefineProperty(this, "message", _descriptor2, this);
    }

    save(model) {
      this.store.save('user', model, {
        dataType: 'text'
      });
    }

    create() {
      let record = this.store.createRecord('user', {
        name: 'hello world',
        gender: 'f'
      });
      this.store.save('user', record);
    }

    remove(model) {
      this.store.deleteRecord('user', model);
      this.model.removeObject(model);
    }

    modelPut() {
      this.store.save('user', {
        _id: 1,
        name: 'name',
        gender: 'f'
      }).then(data => {
        this.message = `model put call response ${JSON.stringify(data)}`;
      });
    }

    modelGet() {
      this.store.find('user').then(data => {
        this.message = `model get call response ${JSON.stringify(data)}`;
      });
    }

    modelDelete() {
      this.store.deleteRecord('user', 1).then(data => {
        this.message = `model delete call response ${JSON.stringify(data)}`;
      });
    }

    modelPost() {
      this.store.save('user', {
        name: 'name',
        gender: 'f'
      }).then(data => {
        this.message = `model post call response ${JSON.stringify(data)}`;
      });
    }

    modelAjaxFail() {
      this.store.modelFor('user').ajax('put', this.url).then(data => {
        this.message = `model ajax call response ${JSON.stringify(data)}`;
      }).catch(reason => {
        this.message = `model ajax call response ${reason}`;
      });
    }

    modelAjaxSuccess() {
      this.store.modelFor('user').ajax('put', this.url).then(data => {
        this.message = `model ajax call response ${JSON.stringify(data)}`;
      }).catch(reason => {
        this.message = `model ajax call response ${reason}`;
      });
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "store", [_service.inject], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "message", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return '';
    }
  }), _applyDecoratedDescriptor(_class.prototype, "save", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "save"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "create", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "create"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "remove", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "remove"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "modelPut", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "modelPut"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "modelGet", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "modelGet"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "modelDelete", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "modelDelete"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "modelPost", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "modelPost"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "modelAjaxFail", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "modelAjaxFail"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "modelAjaxSuccess", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "modelAjaxSuccess"), _class.prototype)), _class);
  _exports.default = IndexController;
});
;define("dummy/ember-easy-orm/index/route", ["exports", "@ember/routing/route", "@ember/service"], function (_exports, _route, _service) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _class, _descriptor;

  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route",0,"@ember/service"eaimeta@70e063a35619d71f

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let IndexRoute = (_class = class IndexRoute extends _route.default {
    constructor() {
      super(...arguments);

      _initializerDefineProperty(this, "store", _descriptor, this);
    }

    model() {
      return this.store.find('user');
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "store", [_service.inject], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class);
  _exports.default = IndexRoute;
});
;define("dummy/ember-easy-orm/index/template", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/template-factory"eaimeta@70e063a35619d71f

  var _default = (0, _templateFactory.createTemplateFactory)({
    "id": "mVB8kL78",
    "block": "[[[10,0],[14,0,\"ui container\"],[12],[1,\"\\n    \"],[10,0],[14,0,\"ui grid\"],[12],[1,\"\\n        \"],[10,0],[14,0,\"row\"],[12],[1,\"\\n            \"],[10,\"h2\"],[12],[1,\"model example\"],[13],[1,\"\\n        \"],[13],[1,\"\\n        \"],[10,0],[14,0,\"row\"],[12],[1,\"\\n            \"],[11,\"button\"],[24,0,\"ui button\"],[24,4,\"button\"],[4,[38,0],[\"click\",[28,[37,1],[[30,0,[\"modelGet\"]],[30,1]],null]],null],[12],[1,\"get\"],[13],[1,\"\\n            \"],[11,\"button\"],[24,0,\"ui button\"],[24,4,\"button\"],[4,[38,0],[\"click\",[28,[37,1],[[30,0,[\"modelPost\"]],[30,1]],null]],null],[12],[1,\"post\"],[13],[1,\"\\n            \"],[11,\"button\"],[24,0,\"ui button\"],[24,4,\"button\"],[4,[38,0],[\"click\",[28,[37,1],[[30,0,[\"modelPut\"]],[30,1]],null]],null],[12],[1,\"put\"],[13],[1,\"\\n            \"],[11,\"button\"],[24,0,\"ui button\"],[24,4,\"button\"],[4,[38,0],[\"click\",[28,[37,1],[[30,0,[\"modelDelete\"]],[30,1]],null]],null],[12],[1,\"delete\"],[13],[1,\"\\n            \"],[11,\"button\"],[24,0,\"ui button\"],[24,4,\"button\"],[4,[38,0],[\"click\",[28,[37,1],[[30,0,[\"modelAjaxSuccess\"]],[30,1]],null]],null],[12],[1,\"AjaxSuccess\"],[13],[1,\"\\n            \"],[11,\"button\"],[24,0,\"ui button\"],[24,4,\"button\"],[4,[38,0],[\"click\",[28,[37,1],[[30,0,[\"modelAjaxFail\"]],[30,1]],null]],null],[12],[1,\"AjaxFail\"],[13],[1,\"\\n        \"],[13],[1,\"\\n        \"],[10,0],[14,0,\"row\"],[12],[1,\"\\n            \"],[10,0],[14,0,\"ui message\"],[12],[1,\"\\n                \"],[1,[30,0,[\"message\"]]],[1,\"\\n            \"],[13],[1,\"\\n        \"],[13],[1,\"\\n        \"],[10,0],[14,0,\"row\"],[12],[1,\"\\n            \"],[10,0],[14,0,\"ui items\"],[12],[1,\"\\n\"],[42,[28,[37,3],[[28,[37,3],[[30,1]],null]],null],null,[[[1,\"                    \"],[10,0],[14,0,\"item\"],[12],[1,\"\\n                        \"],[10,0],[14,0,\"content\"],[12],[1,\"\\n                            \"],[10,0],[14,0,\"header\"],[12],[1,\"\\n                                \"],[1,[30,2,[\"name\"]]],[1,\"\\n                            \"],[13],[1,\"\\n                            \"],[10,0],[14,0,\"extra\"],[12],[1,\"\\n                                \"],[11,\"button\"],[24,0,\"ui button\"],[24,4,\"button\"],[4,[38,0],[\"click\",[28,[37,1],[[30,0,[\"remove\"]],[30,2]],null]],null],[12],[1,\"remove\"],[13],[1,\"\\n                            \"],[13],[1,\"\\n                        \"],[13],[1,\"\\n                    \"],[13],[1,\"\\n\"]],[2]],null],[1,\"            \"],[13],[1,\"\\n        \"],[13],[1,\"\\n    \"],[13],[1,\"\\n\"],[13],[1,\"\\n\"]],[\"@model\",\"item\"],false,[\"on\",\"fn\",\"each\",\"-track-array\"]]",
    "moduleName": "dummy/ember-easy-orm/index/template.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
;define("dummy/ember-easy-orm/store/controller", ["exports", "@ember/controller", "@ember/object", "@ember/service", "@glimmer/tracking", "dummy/config/environment"], function (_exports, _controller, _object, _service, _tracking, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _class, _descriptor, _descriptor2;

  0; //eaimeta@70e063a35619d71f0,"@ember/controller",0,"@ember/object",0,"@ember/service",0,"@glimmer/tracking",0,"dummy/config/environment"eaimeta@70e063a35619d71f

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  const rootURL = _environment.default.rootURL;
  let StoreController = (_class = class StoreController extends _controller.default {
    constructor() {
      super(...arguments);

      _defineProperty(this, "idUrl", rootURL == '/' ? '/v1/user/1' : rootURL + '/v1/user/1');

      _defineProperty(this, "noIdurl", rootURL == '/' ? '/v2/user' : rootURL + '/v2/user');

      _initializerDefineProperty(this, "store", _descriptor, this);

      _initializerDefineProperty(this, "message", _descriptor2, this);
    }

    storePut() {
      this.store.request.put(this.idUrl, {
        dataType: 'text'
      }).then(data => {
        this.message = `store put call response ${JSON.stringify(data)}`;
      });
    }

    storeGet() {
      this.store.request.get(this.noIdurl).then(data => {
        this.message = `store get call response ${JSON.stringify(data)}`;
      });
    }

    storeDelete() {
      this.store.request.delete(this.idUrl, {
        dataType: 'text'
      }).then(data => {
        this.message = `store delete call response ${JSON.stringify(data)}`;
      });
    }

    storePost() {
      this.store.request.post(this.idUrl, {
        data: {
          name: 'name',
          gender: 'f'
        },
        dataType: 'text'
      }).then(data => {
        this.message = `store post call response ${JSON.stringify(data)}`;
      });
    }

    storeAjaxFail() {
      this.store.ajax('put', this.idUrl).then(data => {
        this.message = `store ajax call response ${JSON.stringify(data)}`;
      }).catch(reason => {
        this.message = `store ajax call response ${reason}`;
      });
    }

    errorRequest() {
      this.store.ajax('put', '/v1/404/1').then(data => {
        this.message = `store ajax call response ${JSON.stringify(data)}`;
      }).catch(reason => {
        this.message = `store ajax call response ${reason}`;
      });
    }

    storeAjaxSuccess() {
      this.store.ajax('put', this.idUrl, {
        dataType: 'text'
      }).then(data => {
        this.message = `store ajax call response ${JSON.stringify(data)}`;
      }).catch(reason => {
        this.message = `store ajax call response ${reason}`;
      });
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "store", [_service.inject], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "message", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _applyDecoratedDescriptor(_class.prototype, "storePut", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "storePut"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "storeGet", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "storeGet"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "storeDelete", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "storeDelete"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "storePost", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "storePost"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "storeAjaxFail", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "storeAjaxFail"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "errorRequest", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "errorRequest"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "storeAjaxSuccess", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "storeAjaxSuccess"), _class.prototype)), _class);
  _exports.default = StoreController;
});
;define("dummy/ember-easy-orm/store/route", ["exports", "@ember/routing/route", "@ember/service"], function (_exports, _route, _service) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _class, _descriptor;

  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route",0,"@ember/service"eaimeta@70e063a35619d71f

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let StoreRoute = (_class = class StoreRoute extends _route.default {
    constructor() {
      super(...arguments);

      _initializerDefineProperty(this, "store", _descriptor, this);
    }

    model() {
      return this.store.find('user');
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "store", [_service.inject], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class);
  _exports.default = StoreRoute;
});
;define("dummy/ember-easy-orm/store/template", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/template-factory"eaimeta@70e063a35619d71f

  var _default = (0, _templateFactory.createTemplateFactory)({
    "id": "uJl/r3Ny",
    "block": "[[[10,0],[14,0,\"ui container\"],[12],[1,\"\\n    \"],[10,0],[14,0,\"ui grid\"],[12],[1,\"\\n            \"],[10,0],[14,0,\"row\"],[12],[1,\"\\n                \"],[10,\"h2\"],[14,0,\"ui header\"],[12],[1,\"store example\"],[13],[1,\"\\n            \"],[13],[1,\"\\n            \"],[10,0],[14,0,\"row\"],[12],[1,\"\\n                \"],[11,\"button\"],[24,0,\"ui button\"],[24,4,\"button\"],[4,[38,0],[\"click\",[28,[37,1],[[30,0,[\"storeGet\"]],[30,1]],null]],null],[12],[1,\"get\"],[13],[1,\"\\n                \"],[11,\"button\"],[24,0,\"ui button\"],[24,4,\"button\"],[4,[38,0],[\"click\",[28,[37,1],[[30,0,[\"storePost\"]],[30,1]],null]],null],[12],[1,\"post\"],[13],[1,\"\\n                \"],[11,\"button\"],[24,0,\"ui button\"],[24,4,\"button\"],[4,[38,0],[\"click\",[28,[37,1],[[30,0,[\"storePut\"]],[30,1]],null]],null],[12],[1,\"put\"],[13],[1,\"\\n                \"],[11,\"button\"],[24,0,\"ui button\"],[24,4,\"button\"],[4,[38,0],[\"click\",[28,[37,1],[[30,0,[\"storeDelete\"]],[30,1]],null]],null],[12],[1,\"delete\"],[13],[1,\"\\n                \"],[11,\"button\"],[24,0,\"ui button\"],[24,4,\"button\"],[4,[38,0],[\"click\",[28,[37,1],[[30,0,[\"storeAjaxSuccess\"]],[30,1]],null]],null],[12],[1,\"AjaxSuccess\"],[13],[1,\"\\n                \"],[11,\"button\"],[24,0,\"ui button\"],[24,4,\"button\"],[4,[38,0],[\"click\",[28,[37,1],[[30,0,[\"storeAjaxFail\"]],[30,1]],null]],null],[12],[1,\"AjaxFail\"],[13],[1,\"\\n                \"],[11,\"button\"],[24,0,\"ui button\"],[24,4,\"button\"],[4,[38,0],[\"click\",[30,0,[\"errorRequest\"]]],null],[12],[1,\"errorRequest\"],[13],[1,\"\\n            \"],[13],[1,\"\\n            \"],[10,0],[14,0,\"row\"],[12],[1,\"\\n                \"],[10,0],[14,0,\"ui message\"],[12],[1,\"\\n                    \"],[1,[30,0,[\"message\"]]],[1,\"\\n                \"],[13],[1,\"\\n                \\n            \"],[13],[1,\"\\n    \"],[13],[1,\"\\n\"],[13],[1,\"\\n\"]],[\"@model\"],false,[\"on\",\"fn\"]]",
    "moduleName": "dummy/ember-easy-orm/store/template.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
;define("dummy/ember-easy-orm/template", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/template-factory"eaimeta@70e063a35619d71f

  var _default = (0, _templateFactory.createTemplateFactory)({
    "id": "yX15f/iQ",
    "block": "[[[1,\"\\n\"],[10,0],[14,0,\"ui menu\"],[12],[1,\"\\n    \"],[8,[39,0],[[24,0,\"item\"]],[[\"@route\"],[\"ember-easy-orm.index\"]],[[\"default\"],[[[[1,\"index\"]],[]]]]],[1,\"\\n    \"],[8,[39,0],[[24,0,\"item\"]],[[\"@route\"],[\"ember-easy-orm.store\"]],[[\"default\"],[[[[1,\"store\"]],[]]]]],[1,\"\\n    \"],[8,[39,0],[[24,0,\"item\"]],[[\"@route\"],[\"ember-easy-orm.form\"]],[[\"default\"],[[[[1,\"form\"]],[]]]]],[1,\"\\n\"],[13],[1,\"\\n\\n\\n\"],[46,[28,[37,2],null,null],null,null,null]],[],false,[\"link-to\",\"component\",\"-outlet\"]]",
    "moduleName": "dummy/ember-easy-orm/template.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
;define("dummy/helpers/ensure-safe-component", ["exports", "@embroider/util"], function (_exports, _util) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _util.EnsureSafeComponentHelper;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@embroider/util"eaimeta@70e063a35619d71f
});
;define("dummy/helpers/page-title", ["exports", "ember-page-title/helpers/page-title"], function (_exports, _pageTitle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-page-title/helpers/page-title"eaimeta@70e063a35619d71f

  var _default = _pageTitle.default;
  _exports.default = _default;
});
;define("dummy/initializers/container-debug-adapter", ["exports", "ember-resolver/resolvers/classic/container-debug-adapter"], function (_exports, _containerDebugAdapter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-resolver/resolvers/classic/container-debug-adapter"eaimeta@70e063a35619d71f

  var _default = {
    name: 'container-debug-adapter',

    initialize() {
      let app = arguments[1] || arguments[0];
      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
    }

  };
  _exports.default = _default;
});
;define("dummy/initializers/export-application-global", ["exports", "ember", "dummy/config/environment"], function (_exports, _ember, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _exports.initialize = initialize;
  0; //eaimeta@70e063a35619d71f0,"ember",0,"dummy/config/environment"eaimeta@70e063a35619d71f

  function initialize() {
    var application = arguments[1] || arguments[0];

    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;

      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember.default.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;
        application.reopen({
          willDestroy: function () {
            this._super.apply(this, arguments);

            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  var _default = {
    name: 'export-application-global',
    initialize: initialize
  };
  _exports.default = _default;
});
;define("dummy/models/user", ["exports", "@ember/object", "ember-easy-orm/mixins/model", "dummy/config/environment"], function (_exports, _object, _model, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/object",0,"ember-easy-orm/mixins/model",0,"dummy/config/environment"eaimeta@70e063a35619d71f

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  const {
    attr
  } = _model.DS;

  class UserModel extends _object.default.extend(_model.default) {
    RESTSerializer(data) {
      return data;
    } // urlForSave(){
    //   return config.rootURL == '/' ? '/v1/user_json' : config.rootURL + '/v2/user';
    // }


    saveSerializer(data) {
      return data.res['user'];
    }

    constructor() {
      super(...arguments);

      _defineProperty(this, "url", _environment.default.rootURL == '/' ? '/v1/user_json' : _environment.default.rootURL + '/v1/user_json');

      this.model = {
        name: attr('string'),
        gender: attr('string'),
        age: attr('number'),
        hobby: attr('array'),
        birth: attr({
          defaultValue: function () {
            return new Date();
          }
        })
      };
      this.ajaxSettings = {
        traditional: true,
        dataType: 'json'
      };
    }

  }

  _exports.default = UserModel;
});
;define("dummy/router", ["exports", "@ember/routing/router", "dummy/config/environment"], function (_exports, _router, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/router",0,"dummy/config/environment"eaimeta@70e063a35619d71f

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  class Router extends _router.default {
    constructor() {
      super(...arguments);

      _defineProperty(this, "location", _environment.default.locationType);

      _defineProperty(this, "rootURL", _environment.default.rootURL);
    }

  }

  _exports.default = Router;
  Router.map(function () {
    this.route('ember-easy-orm', function () {
      this.route('form');
      this.route('store');
    });
  });
  Router.map(function () {});
});
;define("dummy/routes/application", ["exports", "@ember/routing/route", "@ember/service"], function (_exports, _route, _service) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _class, _descriptor;

  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route",0,"@ember/service"eaimeta@70e063a35619d71f

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let ApplicationRoute = (_class = class ApplicationRoute extends _route.default {
    constructor() {
      super(...arguments);

      _initializerDefineProperty(this, "router", _descriptor, this);
    }

    redirect() {
      this.router.transitionTo('ember-easy-orm.index');
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "router", [_service.inject], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class);
  _exports.default = ApplicationRoute;
});
;define("dummy/services/-ensure-registered", ["exports", "@embroider/util/services/ensure-registered"], function (_exports, _ensureRegistered) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _ensureRegistered.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@embroider/util/services/ensure-registered"eaimeta@70e063a35619d71f
});
;define("dummy/services/page-title-list", ["exports", "ember-page-title/services/page-title-list"], function (_exports, _pageTitleList) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _pageTitleList.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-page-title/services/page-title-list"eaimeta@70e063a35619d71f
});
;define("dummy/services/page-title", ["exports", "ember-page-title/services/page-title"], function (_exports, _pageTitle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _pageTitle.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-page-title/services/page-title"eaimeta@70e063a35619d71f
});
;define("dummy/services/store", ["exports", "ember-easy-orm/services/store"], function (_exports, _store) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _store.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-easy-orm/services/store"eaimeta@70e063a35619d71f
});
;define("dummy/templates/application", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/template-factory"eaimeta@70e063a35619d71f

  var _default = (0, _templateFactory.createTemplateFactory)({
    "id": "JAxm5o7L",
    "block": "[[[10,\"h2\"],[14,1,\"title\"],[12],[1,\"Welcome to ember-easy-orm\"],[13],[1,\"\\n\\n\"],[46,[28,[37,1],null,null],null,null,null],[1,\"\\n\"]],[],false,[\"component\",\"-outlet\"]]",
    "moduleName": "dummy/templates/application.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
;define("dummy/utils/ember-uploader", ["exports", "ember-semantic-ui/utils/ember-uploader"], function (_exports, _emberUploader) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberUploader.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-semantic-ui/utils/ember-uploader"eaimeta@70e063a35619d71f
});
;define("dummy/utils/file-object", ["exports", "ember-semantic-ui/utils/file-object"], function (_exports, _fileObject) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _fileObject.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-semantic-ui/utils/file-object"eaimeta@70e063a35619d71f
});
;

;define('dummy/config/environment', [], function() {
  var prefix = 'dummy';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

;
          if (!runningTests) {
            require("dummy/app")["default"].create({});
          }
        
//# sourceMappingURL=dummy.map
