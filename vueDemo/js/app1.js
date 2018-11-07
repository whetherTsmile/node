var data = { a: 1 }

var vm = new Vue({
    el: "#app-1",
    data: data
})

vm.$watch('a', (newValue, oldValue) => {
    alert('newValue=' + newValue + ",oldValue=" + oldValue)
})

vm1 = new Vue({
    data: {
        a: "<span style='color:red'>this</span>",
        loginType: null,
        items: [{ msg: "one" }, { msg: "two" }]
    },
    created: function () {
        console.log('a is:' + this.a);
    },
    methods: {
        haha: function () {
            if (this.loginType === 'username')
                this.loginType = null
            else
                this.loginType = 'username';
        },
        warn: function (message, event) {
            // 现在我们可以访问原生事件对象
            if (event) event.preventDefault()
            alert(message)
            // alert(event)
        }

    },
    computed: {
        now: function () {
            return Date.now()
        }
    }
})
vm1.$mount("#app-2")//调用
