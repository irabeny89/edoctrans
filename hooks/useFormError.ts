import { FormEvent, useEffect, useState } from "react";

/**
 *React hook to handle form error when invalid file sizes are selected.
 *
 * @returns
 * `showFormError` - key in object; flag to show error when value is true.
 * @returns
 * `setShowFormError` - key in object; setter for `showFormError`.
 * @returns
 *  `handleFormError` - key in object; callback to handle user error.
 */
export default function useFormError() {
  const [showFileError, setShowFileError] = useState(false),
    [showFailError, setShowFailError] = useState(false);

  const handleFormError = (event: FormEvent) => (
    event.preventDefault(), event.stopPropagation(), setShowFileError(true)
  );

  useEffect(() => {
    if (showFailError) {
      const timerId = setTimeout(() => setShowFailError(false), 1e4);

      return () => clearTimeout(timerId);
    }
  }, [showFailError]);

  return {
    showFileError,
    setShowFileError,
    showFailError,
    setShowFailError,
    handleFormError,
  };
}
