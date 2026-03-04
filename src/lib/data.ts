export const SHORT_CODES = {
  ethio: [
    { code: '*804#', label: 'Check Balance', category: 'General' },
    { code: '*805#', label: 'Recharge Account', category: 'General' },
    { code: '*999#', label: 'Buy Packages', category: 'Data' },
    { code: '*127#', label: 'Telebirr Menu', category: 'Finance' },
    { code: '*806#', label: 'Transfer Balance', category: 'General' },
    { code: '*812#', label: 'Call Me Back', category: 'General' },
  ],
  safaricom: [
    { code: '*704#', label: 'Check Balance', category: 'General' },
    { code: '*705#', label: 'Recharge Account', category: 'General' },
    { code: '*777#', label: 'Buy Packages', category: 'Data' },
    { code: '*733#', label: 'M-PESA Menu', category: 'Finance' },
    { code: '*706#', label: 'Transfer Balance', category: 'General' },
    { code: '*707#', label: 'Call Me Back', category: 'General' },
  ]
};

export const PACKAGES = {
  ethio: [
    { id: 'e1', title: 'Daily 100MB', price: '5 ETB', volume: '100MB', validity: '24 Hours' },
    { id: 'e2', title: 'Weekly 1GB', price: '50 ETB', volume: '1GB', validity: '7 Days' },
    { id: 'e3', title: 'Monthly 5GB', price: '200 ETB', volume: '5GB', validity: '30 Days' },
  ],
  safaricom: [
    { id: 's1', title: 'Daily 150MB', price: '7 ETB', volume: '150MB', validity: '24 Hours' },
    { id: 's2', title: 'Weekly 2GB', price: '65 ETB', volume: '2GB', validity: '7 Days' },
    { id: 's3', title: 'Monthly 10GB', price: '350 ETB', volume: '10GB', validity: '30 Days' },
  ]
};