export enum ANALYTICS_EVENT_TYPE {
    SITE_OPENED = 'SITE_OPENED',
    VIEWED_ABOUT = 'VIEWED_ABOUT',
    SOCIAL_LINK_CLIKED_DEV = 'SOCIAL_LINK_CLIKED_DEV',
    SOCIAL_LINK_CLIKED = 'SOCIAL_LINK_CLIKED',
  }
  
  export const ANALYTICS_EVENT: Record<
    ANALYTICS_EVENT_TYPE,
    ANALYTICS_EVENT_TYPE
  > = {
    SITE_OPENED: ANALYTICS_EVENT_TYPE.SITE_OPENED,
    VIEWED_ABOUT: ANALYTICS_EVENT_TYPE.VIEWED_ABOUT,
    SOCIAL_LINK_CLIKED_DEV: ANALYTICS_EVENT_TYPE.SOCIAL_LINK_CLIKED_DEV,
    SOCIAL_LINK_CLIKED: ANALYTICS_EVENT_TYPE.SOCIAL_LINK_CLIKED,
  };