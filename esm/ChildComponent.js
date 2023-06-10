export default {
    template:
        `<div>
            Child component message is 
            <strong>{{msg}}</strong>
        </div>`,
    props: {
        msg: String,
    },
}