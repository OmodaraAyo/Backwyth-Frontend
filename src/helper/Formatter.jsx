export const formatLabelName = ( value ) => {
    return value ? value.charAt(0).toUpperCase() + value.slice(1) : '';
  }