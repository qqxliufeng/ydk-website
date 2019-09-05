export default {
	data () {
		return {
			serverTime: 0
		}
	},
	
	methods: {
		reBuyTicket (item) {
		  return {
		    title: '再来一单',
		    show: true,
		    action: () => {
				this.$push(this.$mRouter.scenicDetail({
					scenicId: item.ord_scenicId
				}))
		    }
		  }
		},
		action1Click (index) {
			this.list[index.index].stateModel.action1.action()
		},
		action2Click (index) {
			this.list[index.index].stateModel.action2.action()
		},
		setOrderState (data) {
			data.forEach((it, index) => {
			  switch (it.status) {
			    case 'PAY_STATUS_NO': // 待付款
			      it.stateModel = {
			        orderType: '1',
			        stateTip: '待付款',
			        time: {
			          title: '剩余支付时间：',
			          time: Math.max(0, (Number(it.timeout_express) - Number(this.serverTime)))
			        },
			        action1: {
			          title: '取消订单',
			          show: true,
			          action: () => {
						  uni.showModal({
						  	cancelText:"再想想",
							confirmText: "取消",
							title: '提示',
							content: '是否要取消此订单',
							success: (res) => {
								if (res.confirm) {
									this.$http(this.$urlPath.orderCancel, {
									  ord_id: it.ord_id
									}, '正在取消…', (result) => {
									  this.$toast('订单取消成功')
									  uni.startPullDownRefresh()
									}, (errorCode, error) => {
									  this.$toast(error)
									})
								}
							}
						  })
			          }
			        },
			        action2: {
			          title: '立即支付',
			          show: Number(it.timeout_express) - Number(this.serverTime) > 0,
			          action: () => {
						  this.$push(this.$mRouter.orderInfoPay({
							  no: it.out_trade_no
						  }))
			          }
			        }
			      }
			      break
			    case 'USE_STATUS_NO': // 未使用
			      it.stateModel = {
			        orderType: '2',
			        stateTip: '已支付',
			        time: {
			          title: '下单时间：',
			          time: it.ord_add_time
			        },
			        action1: this.reBuyTicket(it),
			        action2: {
			          title: it.is_refund === 1 ? '申请退款' : '',
			          show: it.is_refund === 1,
			          action: it.is_refund ? () => {
						  this.$push(this.$mRouter.orderRefund({
						  	id: it.ord_id
						  }))
			          } : null
			        }
			      }
			      break
			    case 'NO_COMMENT':
			    case 'USE_STATUS': // 已使用
			      it.stateModel = {
			        orderType: '3',
			        stateTip: '待评价',
			        time: {
			          title: '下单时间：',
			          time: it.ord_add_time
			        },
			        action1: this.reBuyTicket(it),
			        action2: {
			          title: '去评价',
			          show: true,
			          action: () => {
						  this.$push(this.$mRouter.orderComment({
						  	orderId: it.ord_id
						  }))
			          }
			        }
			      }
			      break
			    case 'USE_STATUS_OFF': // 取消
			      it.stateModel = {
			        orderType: '6',
			        stateTip: '已取消',
			        time: {
			          title: '下单时间：',
			          time: it.ord_add_time
			        },
			        action1: {
			          title: '删除订单',
			          show: true,
			          action: () => {
						uni.showModal({
							title: '提示',
							content: '是否要删除此订单?',
							cancelText: '取消',
							confirmText: '删除',
							success: (res) => {
								if (res.confirm) {
									this.$http(this.$urlPath.orderDelete, {
									  ord_id: it.ord_id
									}, '正在删除…', (result) => {
										this.list.splice(index, 1)
										this.$toast('订单删除成功')
									}, (errorCode, error) => {
									  this.$toast(error)
									})
								} 
							}
						})
			          }
			        },
			        action2: this.reBuyTicket(it)
			      }
			      break
			    case 'USE_STATUS_EXPIRE': // 已过期
			      it.stateModel = {
			        orderType: '7',
			        stateTip: '已过期',
			        time: {
			          title: '下单时间：',
			          time: it.ord_add_time
			        },
			        action1: {
			          title: '删除订单',
			          show: true,
			          action: () => {
			            let confirm = window.confirm('是否要删除此订单？')
			            if (confirm) {
			              this.$http(this.$urlPath.orderDelete, {
			                ord_id: it.ord_id
			              }, '正在删除…', (result) => {
			                this.reload()
			                this.$toast('订单删除成功')
			              }, (errorCode, error) => {
			                this.$toast(error)
			              })
			            }
			          }
			        },
			        action2: this.reBuyTicket(it)
			      }
			      break
			    case 'ALREADY_COMMENT': // 已经评价
			      it.stateModel = {
			        orderType: '5',
			        stateTip: '已完成',
			        time: {
			          title: '下单时间：',
			          time: it.ord_add_time
			        },
			        action1: this.reBuyTicket(it),
			        action2: {
			          title: '',
			          show: false,
			          action: null
			        }
			      }
			      break
			    case 'USE_STATUS_REVOKE': // 退款
			      it.stateModel = {
			        orderType: '4',
			        stateTip: '退款/售后',
			        time: {
			          title: '下单时间：',
			          time: it.ord_add_time
			        },
			        action1: this.reBuyTicket(it),
			        action2: {
			          title: '',
			          show: false,
			          action: null
			        }
			      }
			      break
			    case 'USE_STATUS_OVER': // 订单已完结
			      it.stateModel = {
			        orderType: '9',
			        stateTip: '已完成',
			        time: {
			          title: '下单时间：',
			          time: it.ord_add_time
			        },
			        action1: this.reBuyTicket(it),
			        action2: {
			          title: '',
			          show: false,
			          action: null
			        }
			      }
			      break
			  }
			})
		}
	}
}