export const extensionUrls = {
  default:
    'https://chromewebstore.google.com/detail/disliko/lggcieolgjndakkpgmokiomipmmocenn',
  chrome:
    'https://chromewebstore.google.com/detail/disliko/lggcieolgjndakkpgmokiomipmmocenn',
  edge: 'https://microsoftedge.microsoft.com/addons/detail/disliko/ijifpknhjegfebegaobljdmkcehkecph',
}

export function sendToExtension() {
  const isEdge = navigator.userAgent.toLowerCase().includes('edg')
  const new_url = isEdge ? extensionUrls.edge : extensionUrls.default

  return new_url
}
