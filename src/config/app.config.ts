interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Administrator'],
  customerRoles: [],
  tenantRoles: ['Administrator', 'Moderator', 'Content Creator'],
  tenantName: 'Company',
  applicationName: 'Twatter',
  addOns: ['chat', 'notifications'],
};
