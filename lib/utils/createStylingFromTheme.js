'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createStylingFromTheme = exports.base16Themes = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _jss = require('jss');

var _jss2 = _interopRequireDefault(_jss);

var _jssVendorPrefixer = require('jss-vendor-prefixer');

var _jssVendorPrefixer2 = _interopRequireDefault(_jssVendorPrefixer);

var _jssNested = require('jss-nested');

var _jssNested2 = _interopRequireDefault(_jssNested);

var _reactBase16Styling = require('react-base16-styling');

var _hexRgba = require('hex-rgba');

var _hexRgba2 = _interopRequireDefault(_hexRgba);

var _inspector = require('../themes/inspector');

var _inspector2 = _interopRequireDefault(_inspector);

var _reduxDevtoolsThemes = require('redux-devtools-themes');

var reduxThemes = _interopRequireWildcard(_reduxDevtoolsThemes);

var _themes = require('../themes');

var inspectorThemes = _interopRequireWildcard(_themes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_jss2.default.use((0, _jssVendorPrefixer2.default)());
_jss2.default.use((0, _jssNested2.default)());

var colorMap = function colorMap(theme) {
  return {
    TEXT_COLOR: theme.base06,
    TEXT_PLACEHOLDER_COLOR: (0, _hexRgba2.default)(theme.base06, 60),
    BACKGROUND_COLOR: theme.base00,
    SELECTED_BACKGROUND_COLOR: (0, _hexRgba2.default)(theme.base03, 20),
    SKIPPED_BACKGROUND_COLOR: (0, _hexRgba2.default)(theme.base03, 10),
    HEADER_BACKGROUND_COLOR: (0, _hexRgba2.default)(theme.base03, 30),
    HEADER_BORDER_COLOR: (0, _hexRgba2.default)(theme.base03, 20),
    BORDER_COLOR: (0, _hexRgba2.default)(theme.base03, 50),
    LIST_BORDER_COLOR: (0, _hexRgba2.default)(theme.base03, 50),
    ACTION_TIME_BACK_COLOR: (0, _hexRgba2.default)(theme.base03, 20),
    ACTION_TIME_COLOR: theme.base04,
    PIN_COLOR: theme.base04,
    ITEM_HINT_COLOR: (0, _hexRgba2.default)(theme.base0F, 90),
    TAB_BACK_SELECTED_COLOR: (0, _hexRgba2.default)(theme.base03, 20),
    TAB_BACK_COLOR: (0, _hexRgba2.default)(theme.base00, 70),
    TAB_BACK_HOVER_COLOR: (0, _hexRgba2.default)(theme.base03, 40),
    TAB_BORDER_COLOR: (0, _hexRgba2.default)(theme.base03, 50),
    DIFF_ADD_COLOR: (0, _hexRgba2.default)(theme.base0B, 40),
    DIFF_REMOVE_COLOR: (0, _hexRgba2.default)(theme.base08, 40),
    DIFF_ARROW_COLOR: theme.base0E,
    LINK_COLOR: (0, _hexRgba2.default)(theme.base0E, 90),
    LINK_HOVER_COLOR: theme.base0E,
    ERROR_COLOR: theme.base08
  };
};

var getSheetFromColorMap = function getSheetFromColorMap(map) {
  return {
    inspector: {
      display: 'flex',
      'flex-direction': 'column',
      width: '100%',
      height: '100%',
      'font-family': 'monaco, Consolas, "Lucida Console", monospace',
      'font-size': '12px',
      'font-smoothing': 'antialiased',
      'line-height': '1.5em',

      'background-color': map.BACKGROUND_COLOR,
      color: map.TEXT_COLOR
    },

    inspectorWide: {
      'flex-direction': 'row'
    },

    actionList: {
      'flex-basis': '40%',
      'flex-shrink': 0,
      'overflow-x': 'hidden',
      'overflow-y': 'auto',
      'border-bottom-width': '3px',
      'border-bottom-style': 'double',
      display: 'flex',
      'flex-direction': 'column',

      'background-color': map.BACKGROUND_COLOR,
      'border-color': map.LIST_BORDER_COLOR
    },

    actionListHeader: {
      display: 'flex',
      flex: '0 0 auto',
      'align-items': 'center',
      'border-bottom-width': '1px',
      'border-bottom-style': 'solid',

      'border-color': map.LIST_BORDER_COLOR
    },

    actionListRows: {
      overflow: 'auto'
    },

    actionListHeaderSelector: {
      display: 'inline-flex',
      'margin-right': '10px'
    },

    actionListWide: {
      'flex-basis': '40%',
      'border-bottom': 'none',
      'border-right-width': '3px',
      'border-right-style': 'double'
    },

    actionListItem: {
      'border-bottom-width': '1px',
      'border-bottom-style': 'solid',
      display: 'flex',
      'justify-content': 'space-between',
      padding: '5px 10px',
      cursor: 'pointer',
      'user-select': 'none',

      '&:last-child': {
        'border-bottom-width': 0
      },

      'border-bottom-color': map.BORDER_COLOR
    },

    actionListItemSelected: {
      'background-color': map.SELECTED_BACKGROUND_COLOR
    },

    actionListItemSkipped: {
      'background-color': map.SKIPPED_BACKGROUND_COLOR
    },

    actionListFromFuture: {
      opacity: '0.6'
    },

    actionListItemButtons: {
      position: 'relative',
      height: '20px',
      display: 'flex'
    },

    actionListItemTime: {
      display: 'inline',
      padding: '4px 6px',
      'border-radius': '3px',
      'font-size': '0.8em',
      'line-height': '1em',
      'flex-shrink': 0,

      'background-color': map.ACTION_TIME_BACK_COLOR,
      color: map.ACTION_TIME_COLOR
    },

    actionListItemSelector: {
      display: 'inline-flex'
    },

    actionListItemName: {
      overflow: 'hidden',
      'text-overflow': 'ellipsis',
      'line-height': '20px'
    },

    actionListItemNameSkipped: {
      'text-decoration': 'line-through',
      opacity: 0.3
    },

    actionListHeaderSearch: {
      outline: 'none',
      border: 'none',
      width: '100%',
      padding: '5px 10px',
      'font-size': '1em',
      'font-family': 'monaco, Consolas, "Lucida Console", monospace',

      'background-color': map.BACKGROUND_COLOR,
      color: map.TEXT_COLOR,

      '&::-webkit-input-placeholder': {
        color: map.TEXT_PLACEHOLDER_COLOR
      },

      '&::-moz-placeholder': {
        color: map.TEXT_PLACEHOLDER_COLOR
      }
    },

    actionListHeaderWrapper: {
      position: 'relative',
      height: '20px'
    },

    actionPreview: {
      flex: 1,
      display: 'flex',
      'flex-direction': 'column',
      'flex-grow': 1,
      'overflow-y': 'hidden',

      '& pre': {
        border: 'inherit',
        'border-radius': '3px',
        'line-height': 'inherit',
        color: 'inherit'
      },

      'background-color': map.BACKGROUND_COLOR
    },

    actionPreviewContent: {
      flex: 1,
      'overflow-y': 'auto'
    },

    stateDiff: {
      padding: '5px 0'
    },

    stateDiffEmpty: {
      padding: '10px',

      color: map.TEXT_PLACEHOLDER_COLOR
    },

    stateError: {
      padding: '10px',
      'margin-left': '14px',
      'font-weight': 'bold',

      color: map.ERROR_COLOR
    },

    inspectedPath: {
      padding: '6px 0'
    },

    inspectedPathKey: {
      '&:not(:last-child):after': {
        content: '" > "'
      }
    },

    inspectedPathKeyLink: (0, _defineProperty3.default)({
      cursor: 'pointer',
      '&:hover': {
        'text-decoration': 'underline'
      },

      color: map.LINK_COLOR
    }, '&:hover', {
      color: map.LINK_HOVER_COLOR
    }),

    treeItemPin: {
      'font-size': '0.7em',
      'padding-left': '5px',
      cursor: 'pointer',
      '&:hover': {
        'text-decoration': 'underline'
      },

      color: map.PIN_COLOR
    },

    treeItemHint: {
      color: map.ITEM_HINT_COLOR
    },

    previewHeader: {
      flex: '0 0 30px',
      padding: '5px 10px',
      'align-items': 'center',
      'border-bottom-width': '1px',
      'border-bottom-style': 'solid',

      'background-color': map.HEADER_BACKGROUND_COLOR,
      'border-bottom-color': map.HEADER_BORDER_COLOR
    },

    tabSelector: {
      position: 'relative',
      'z-index': 1,
      display: 'inline-flex',
      float: 'right'
    },

    selectorButton: {
      cursor: 'pointer',
      position: 'relative',
      padding: '5px 10px',
      'border-style': 'solid',
      'border-width': '1px',
      'border-left-width': 0,

      '&:first-child': {
        'border-left-width': '1px',
        'border-top-left-radius': '3px',
        'border-bottom-left-radius': '3px'
      },

      '&:last-child': {
        'border-top-right-radius': '3px',
        'border-bottom-right-radius': '3px'
      },

      'background-color': map.TAB_BACK_COLOR,

      '&:hover': {
        'background-color': map.TAB_BACK_HOVER_COLOR
      },

      'border-color': map.TAB_BORDER_COLOR
    },

    selectorButtonSmall: {
      padding: '0px 8px',
      'font-size': '0.8em'
    },

    selectorButtonSelected: {
      'background-color': map.TAB_BACK_SELECTED_COLOR
    },

    diff: {
      padding: '2px 3px',
      'border-radius': '3px',
      position: 'relative',

      color: map.TEXT_COLOR
    },

    diffWrap: {
      position: 'relative',
      'z-index': 1
    },

    diffAdd: {
      'background-color': map.DIFF_ADD_COLOR
    },

    diffRemove: {
      'text-decoration': 'line-through',
      'background-color': map.DIFF_REMOVE_COLOR
    },

    diffUpdateFrom: {
      'text-decoration': 'line-through',
      'background-color': map.DIFF_REMOVE_COLOR
    },

    diffUpdateTo: {
      'background-color': map.DIFF_ADD_COLOR
    },

    diffUpdateArrow: {
      color: map.DIFF_ARROW_COLOR
    },

    rightSlider: {
      'font-smoothing': 'subpixel-antialiased', // http://stackoverflow.com/a/21136111/4218591
      position: 'absolute',
      right: 0,
      transform: 'translateX(150%)',
      transition: 'transform 0.2s ease-in-out'
    },

    rightSliderRotate: {
      transform: 'rotateX(90deg)',
      transition: 'transform 0.2s ease-in-out 0.08s'
    },

    rightSliderShown: {
      position: 'static',
      transform: 'translateX(0)'
    },

    rightSliderRotateShown: {
      transform: 'rotateX(0)',
      transition: 'transform 0.2s ease-in-out 0.18s'
    }
  };
};

var themeSheet = void 0;

var getDefaultThemeStyling = function getDefaultThemeStyling(theme) {
  if (themeSheet) {
    themeSheet.detach();
  }

  themeSheet = _jss2.default.createStyleSheet(getSheetFromColorMap(colorMap(theme))).attach();

  return themeSheet.classes;
};

var base16Themes = exports.base16Themes = (0, _extends3.default)({}, reduxThemes, inspectorThemes);

var createStylingFromTheme = exports.createStylingFromTheme = (0, _reactBase16Styling.createStyling)(getDefaultThemeStyling, {
  defaultBase16: _inspector2.default,
  base16Themes: base16Themes
});