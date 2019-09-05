
// const baseIP = 'http://192.168.1.100'

// const baseIP = 'https://www.yixinglvxing.com'

const baseIP = 'https://www.liuyiqinzi.com'

export const baseUrl = baseIP + '/store_api/v1/'

export const imageUrl = baseIP

const commonModuleUrl = 'common/'

export const imageActionUrl = imageUrl + '/store_api/' + commonModuleUrl + 'upload'

const userInfoUrl = 'user/'

export const userInfoLoginUrl = userInfoUrl + 'login'

export const userInfoRegisterUrl = userInfoUrl + 'register'

export const userInfoGetSMSCodeUrl = userInfoUrl + 'get_captcha'

export const userInfoModileLoginUrl = userInfoUrl + 'mobile_login'

export const userInfoForgetPWUrl = userInfoUrl + 'resetpwd'

export const userInfoResetPWUrl = userInfoUrl + 'eidtpwd'

export const userInfoResetInfo = userInfoUrl + 'profile'

export const userInfo = userInfoUrl + 'user_info'

export const wxLogin = userInfoUrl + 'miniapp_login'

export const getOpenId = userInfoUrl + 'get_openid'

const favoritesUrl = 'favorites/'

export const userFavoriteScenicUrl = favoritesUrl + 'favorite_scenic'

export const userUnFavoroteScenicUrl = favoritesUrl + 'unfavorite_scenic'

export const userFavoriteGoodsUrl = favoritesUrl + 'favorite_goods'

export const userUnFavoroteGoodsUrl = favoritesUrl + 'unfavorite_goods'

const personInfoUrl = 'personal/'

export const linkManUrl = personInfoUrl + 'linkman'

export const addLinkManUrl = personInfoUrl + 'add_linkman'

export const editLinkManUrl = personInfoUrl + 'edit_linkman'

export const deleteLinkManUrl = personInfoUrl + 'del_linkman'

const indexModuleUrl = 'index/'

export const indexUrl = indexModuleUrl + 'index'

export const noticeDetails = indexModuleUrl + 'notice_details'

const scenicDetailModuleUrl = 'details/'

export const scenicDetailUrl = scenicDetailModuleUrl + 'scenic_details'

export const goodsDetailUrl = scenicDetailModuleUrl + 'goods_detail'

export const scenicNotesUrl = scenicDetailModuleUrl + 'scenic_notes'

const commentModuleUrl = 'comment/'

export const commentListUrl = commentModuleUrl + 'comment_list'

export const addCommentUrl = commentModuleUrl + 'add_comment'

const askModuleUrl = 'ask/'

export const askListUrl = askModuleUrl + 'ask_list'

export const askAddUrl = askModuleUrl + 'add_ask'

export const askAnswerUrl = askModuleUrl + 'answer'

export const askAnswerListUrl = askModuleUrl + 'answer_list'

export const askAnswerLikeUrl = askModuleUrl + 'answer_like'

export const askAnserGetScenicUrl = askModuleUrl + 'get_scenic'

export const myAnswerUrl = askModuleUrl + 'my_answer'

export const myAskUrl = askModuleUrl + 'my_ask_list'

const orderModuleUrl = 'order/'

export const orderReserve = orderModuleUrl + 'reserve'

export const orderCreate = orderModuleUrl + 'create'

export const orderStatusNum = orderModuleUrl + 'order_status_num'

export const orderList = orderModuleUrl + 'order_list'

export const orderDetails = orderModuleUrl + 'details'

export const orderCancel = orderModuleUrl + 'cancel'

export const orderDelete = orderModuleUrl + 'del'

export const orderRefundDetail = orderModuleUrl + 'refund_details'

export const orderRefund = orderModuleUrl + 'refund'

export const orderRefundList = orderModuleUrl + 'afer_sales_list'

export const orderRefundAfterDetail = orderModuleUrl + 'afer_sales_details'

export const orderCancelRefund = orderModuleUrl + 'cancel_refund'

export const orderAfterSalesLog = orderModuleUrl + 'after_sales_log'

const payModuleUrl = 'payment/'

export const orderPayUrl = payModuleUrl + 'run_pay'

export const orderPay = payModuleUrl + 'do_pay'

const messageModuleUrl = 'sys/'

export const messageList = messageModuleUrl + 'message_list'

export const messageDetails = messageModuleUrl + 'message_details'

export const customService = messageModuleUrl + 'customservice'

export const registerProtocol = messageModuleUrl + 'protocol'

const searchModuleUrl = 'search/'

export const hotSearch = searchModuleUrl + 'hot_search'

export const runSeacher = searchModuleUrl + 'run_seacher'

const categoryModuleUrl = 'category/'

export const categoryIndex = categoryModuleUrl + 'index'

const reportModuleUrl = 'report/'

export const reportUrl = reportModuleUrl + 'reports'

export const doReport = reportModuleUrl + 'add'

const assistModuleUrl = 'marketing/'

export const assistDetail = assistModuleUrl + 'assist_detail'

export const promotionDetailUrl = assistModuleUrl + 'promotion_detail'

export const assistInvite = assistModuleUrl + 'assist_invite'

export const assistJoin = assistModuleUrl + 'assist_join'

export const assistLogin = userInfoUrl + 'assist_login'

export const assistList = assistModuleUrl + 'assist'

export const getShareInfo = assistModuleUrl + 'share'

export const getWxQrCode = assistModuleUrl + 'wx_qr_code'

export const getActivityRuleDetails = assistModuleUrl + 'assist_details'

export function shareActivityUrl (aid, uid, i, s) {
  return 'http://www.store.liuyiqinzi.com/helpfriend' + '?aid=' + aid + '&uid=' + uid + '&i=' + i + '&s=' + s
  // return 'http://192.168.0.111:8080/helpfriend' + '?aid=' + aid + '&uid=' + uid + '&i=' + i + '&s=' + s
}
