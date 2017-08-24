'use strict';

module.exports = function(Note) {
  // Validate the note scoped to a user.
  Note.validatesFormatOf('key', {with: /^[a-z]+$/g});
};
