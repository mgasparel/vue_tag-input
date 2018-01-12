Vue.component('tag-input', {
    template: `
        <div>
            <span v-for="tag in tags">
                {{ tag }}
                <span @click="del(tag)" class="close">(x)</span>
            </span>
            <input type="text" ref="test" v-model="input" @keydown.tab.prevent="add" @keydown.enter.prevent="add">
        </div>
    `,

    data() {
        return {
            input: '',
            tags: []
        }
    },

    methods: {
        add() {
            let text = this.input.trim();

            if ( this.tags.indexOf(text) === -1 ){
                this.tags.push(text);
            }

            this.input = '';

            this.$refs.test.focus();
        },

        del(tag) {
            let index = this.tags.indexOf(tag)

            if ( index !== -1 ){
                this.tags.splice(index, 1);
            }

            this.$refs.test.focus();
        }
    }
});

new Vue({
    el: '#app'
})