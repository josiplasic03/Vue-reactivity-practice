const reactivityProject = Vue.createApp({
    data() {
        return {
            number: 0
        }
    },

    methods: {
        addNumber(number) {
            return this.number += number;
        }
    },

    computed: {
        result() {
            if(this.number < 37) {
                return 'Not there yet.';
            } else if(this.number > 37) {
                return 'Too much';
            } else if(this.number === 37) {
                return 37;
            }
        }
    }, 

    watch: {
        result() {
            const that = this;
            setTimeout(() => {
                that.number = 0;
            }, 5000)
        }
    }
});

reactivityProject.mount("#assignment");