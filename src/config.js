// Centralized so real assets and contact details only need updating in one place.

export const WHATSAPP_NUMBER = '917373114666'
export const CONTACT_EMAIL = 'YazhSeytech@gmail.com'

export function whatsappLink(message = "Hi! I'd like to know more about InventoryOpz.") {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

export const ASSETS = {
  logo: '/assets/logo.png',
  yazhseyLogo: '/assets/yazhsey-logo.png',
  demoVideo: '/assets/inventory-demo.mp4',
  clientLogoBdb: '/assets/client-logo-bdb.png',
  heroScreenshot: '/assets/dashboard-home.png',
  screens: {
    dashboardHome: '/assets/dashboard-home.png',
    factoryStock: '/assets/inventory-factory-stock.png',
    purchaseRequests: '/assets/purchase-requests.png',
    reportsAnalytics: '/assets/reports-analytics.png',
    userRoleManagement: '/assets/user-role-management.png',
    customerMailbox: '/assets/customer-mailbox.png',
    suppliersOverview: '/assets/suppliers-overview.png',
    salesPurchaseOrders: '/assets/sales-purchase-orders.png',
    lowStockMonitoring: '/assets/low-stock-monitoring.png',
    supplierManagement: '/assets/supplier-management.png',
    inventoryStockManagement: '/assets/inventory-stock-management.png',
    productManagementOrders: '/assets/product-management-orders.png',
  },
}
