export const userAuthKey = 's_user_token'
export const openidKey = 's_user_appid'
export const userInfoKey = 's_user_info'
export const clientId = 'webapp'
export const clientSecret = 'surveyship$2020'
export const apiHost = 'https://www.orangesoda.cn'
export const websocketServer = 'wss://www.orangesoda.cn/websocket/'
export const apis = {
    userLogin: '/ship-auth-server/api/login',
    userLogout: '/ship-auth-server/api/exit',
    getUserInfo: '/ship-api/api/user/findUserDetail',
    getUserList: '/ship-api/api/user/findPage',
    getUserDetail: '/ship-api/api/user/findById',
    addAndUpdateUser: '/ship-api/api/user/saveUser',
    getRoleList: '/ship-api/api/user/findAllUserRole',
    updateUserPassWord: '/ship-api/api/user/resetUserPassword',	
    getOpenidAndToken: '/ship-api/api/user/findOpenId',
    uploadImage: '/ship-api/api/file/upload',
    addAndEditShip: '/ship-api/api/ship/saveShip',
    selectShipList: '/ship-api/api/ship/findPage',
    selectWorkingShips: '/ship-api/api/ship/findActive',
    selectShipDetail: '/ship-api/api/ship/findById',
    setWakeStatus: '/ship-api/api/ship/setWakeStatus',
    setFollowByShipId: '/ship-api/api/user/setFollow',
    calculateTrackInfo: '/ship-api/api/track/calculateTrackInfo',
    findCurrentTrack: '/ship-api/api/track/findCurrentTrack',
    findTrackPage: '/ship-api/api/track/findTrackPage',
    findTrackDetail: '/ship-api/api/track/findTrackDetail',
    getCurrentUserShip: '/ship-api/api/user/findCurrentUserShip',
    findFollowShipHistoryLocation: '/ship-api/api/user/findFollowShipHistoryLocation',
    findTypeOfInquiry: '/ship-api/api/config/findTypeOfInquiry',
    findShipMonitoringById: '/ship-api/api/ship/findShipMonitoringById',
    saveShipMonitoring: '/ship-api/api/ship/saveShipMonitoring',
    findShipCurrentLocation: '/ship-api/api/user/findShipCurrentLocation',
    resetPassword: '/ship-api/api/user/resetPassword'
}
