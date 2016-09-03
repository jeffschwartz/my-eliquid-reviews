/**
 * Convets line break characters (i.e. "\n") to break tags (i.e.
 * "<br />).
 */
export const replaceLineBreaksWithBreakTags = input => (
    input && input.length ? input.replace(/\n\r?/g, "<br />") : input
);