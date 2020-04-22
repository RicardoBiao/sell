<template>
    <div class="header">
        <div class="content-wrapper">
            <div class="avatar">
                <img width="64" height="64" border-radius="4" :src="seller.avatar" alt="avatar">  
            </div>
            <div class="content">
                <div class="title">
                    <span class="brand"></span>
                    <span class="name">{{seller.name}}</span>
                </div>
                <div class="description">
                    {{seller.description}}/{{seller.deliveryTime}}分钟送达
                </div>
                <div v-if="seller.supports" class="support">
                    <span class="icon" :class="classMap[seller.supports[0].type]"></span>
                    <span class="text">{{seller.supports[0].description}}</span>
                </div>
                 
            </div>
            <div v-if="seller.supports" @click="showDetail()" class="support-count">
                <span class="count">{{seller.supports.length}}个</span>
                <i class="icon-keyboard_arrow_right"></i>
            </div>
           
        </div>
        <div @click="showDetail()" class="bulletin-wrapper">
            <span class="bulletin-title"></span>
            <span class="bulletin-text">{{seller.bulletin}}</span>
            <i class="icon-keyboard_arrow_right"></i>
        </div>
        <div v-show="detailShow" class="detail">
            <button @click="showDetail()" >close</button>
        </div>

    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        props: {
            seller: {
                type: Object
            }
        } ,
        data () {
           return {
               detailShow : false
           } 
        },
        methods: {
            showDetail () {
                this.detailShow = !this.detailShow;
            }

        },
        created () {
            this.classMap = ['decrease','discount','special','invoice','guarantee']
        }
    };
    
</script>


<style lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/mixin.styl";
   .header
        color : #ffffff
        background-color : #999 
        .content-wrapper
            position : relative
            padding : 24px 12px 18px 24px
            font-size : 0
            .avatar
                display : inline-block
                vertical-align : top
                img 
                    border-radius : 2px
            .content
                display : inline-block
                margin-left : 16px
                font-size : 14px
                .title
                    margin : 2px 0 8px 0
                .brand
                    display : inline-block
                    vertical-align : top
                    width : 30px
                    height : 18px
                    // background-image : url(brand + "@2x.png")
                    bg-image('brand')
                    background-size : 30px 18px
                    background-repeat : no-repeat
                .name
                    margin-left : 6px
                    font-size : 16px
                    line-height : 18px
                    font-weight : bold
                .description
                    margin-bottom : 10px
                    line-height : 12px
                    font-size : 12px
                    font-weight : 200
                        color : rgb(255,255,255)
                .support
                    .icon
                        // background-image : url(decrease_1 + "@2x.png")
                        display : inline-block
                        vertical-align : top
                        width : 12px
                        height : 12px
                        margin-top : 1px
                        margin-right : 4px
                        background-size : 12px 12px
                        background-repeat : no-repeat
                        &.decrease
                            bg-image('decrease_1')
                        &.discount
                            bg-image('discount_1')
                        &.guarantee
                            bg-image('guarantee_1')
                        &.invoice
                            bg-image('invoice_1')
                        &.special
                            bg-image('special_1')
                    .text
                        line-height : 12px
                        font-size : 12px
            .support-count
                display : flex
                position : absolute
                right : 12px
                bottom : 14px
                padding 0 8px
                height : 24px
                border-radius : 14px
                background : rgba(0, 0, 0, 0.2)
                text-align : center
                .count
                    font-size : 10px
                    align-self : center
                .icon-keyboard_arrow_right
                    font-size : 10px

        .bulletin-wrapper
            height : 28px
            line-height : 28px
            padding : 0 22px 0 12px
            white-space : nowrap
            text-overflow : ellipsis
            overflow : hidden
            background-color : black 
            .bulletin-title
                display : inline-block
                vertical-align : top
                width : 22px
                height : 12px
                margin-top : 8px
                bg-image('bulletin')
                background-size : 22px 12px
                background-repeat : no-repeat
            .bulletin-text
                vertical-align : top
                font-size : 10px
                margin-left : 4px
            .icon-keyboard_arrow_right
                font-size : 10px
                right : 1
        .detail
            position : fixed
            z-index : 100
            top : 0px
            left : 0px
            height : 100%
            width : 100%
            background-color : rgba(0,0,0,0.5)
            text-align : center
            button 
                position : absolute
                bottom : 20px
                margin : 0 auto
                background-color : red
                
             





</style>