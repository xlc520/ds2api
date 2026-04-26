'use strict';

const XML_TOOL_SEGMENT_TAGS = [
  '<|dsml|tool_calls>', '<|dsml|tool_calls\n', '<|dsml|tool_calls ',
  '<tool_calls>', '<tool_calls\n', '<tool_calls ',
];

const XML_TOOL_OPENING_TAGS = [
  '<|dsml|tool_calls',
  '<tool_calls',
];

const XML_TOOL_CLOSING_TAGS = [
  '</|dsml|tool_calls>',
  '</tool_calls>',
];

module.exports = {
  XML_TOOL_SEGMENT_TAGS,
  XML_TOOL_OPENING_TAGS,
  XML_TOOL_CLOSING_TAGS,
};
