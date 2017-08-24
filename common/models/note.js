'use strict';

module.exports = function(Note) {
  // Validate the note scoped to a user.
  //Note.validatesUniquenessOf('key', {scopedTo: ['creator']});
  Note.validatesFormatOf('key', {with: /^[a-zA-Z0-9]+$/g});
};
