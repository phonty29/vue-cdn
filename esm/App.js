import ChildComponent from './ChildComponent.js'

export default {
    template: 
        `<div>
            My parent message is 
            <strong>{{message}}</strong>
            <child-component msg="Hello, components via CDN" /> 
        </div>`,
    data() {
        return {
            message: 'Hello, Vue CDN'
        }
    },
    components: {
        ChildComponent,
    },
}