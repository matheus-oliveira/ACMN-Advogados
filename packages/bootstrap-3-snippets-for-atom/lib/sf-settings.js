'use babel';

export default {

    config: {
        "sf-prefix": {
            "title": "Snippets prefix default shortcode",
            "type": "string",
            "default": ".:",
            "description": "Right now, this function does not work, the intention will be to dinamyc add your custom prefix to the snippets."
        },
    },

    activate(state) {
        console.log('Welcome back to project, happy coding!');
        // console.log("a:" + atom.config.get("bootstrap-3-snippets-for-atom.sf-prefix"));
        // console.log("c:" + atom.config.get("bootstrap-3-snippets-for-atom.sf-prefix"));
    },

    deactivate() {
        console.log('sfSnippets Off, happy coding!');
    },

    serialize() {
    },

    generate() {

    }
};
