/**
 * Transforms a Cloudinary URL to include auto-format and auto-quality parameters.
 * @param {string} url - The original Cloudinary URL
 * @returns {string} - The transformed URL
 */
export const transformCloudinaryUrl = (url) => {
  if (!url || !url.includes('cloudinary.com')) return url;

  // Check if it's already transformed
  if (url.includes('f_auto') || url.includes('q_auto')) return url;

  // Standard Cloudinary URL structure: .../upload/v12345678/path/to/image.jpg
  // We want to insert transformations after /upload/
  const uploadPart = '/upload/';
  const index = url.indexOf(uploadPart);

  if (index !== -1) {
    const insertionPoint = index + uploadPart.length;
    return `${url.slice(0, insertionPoint)}f_auto,q_auto/${url.slice(insertionPoint)}`;
  }

  return url;
};
