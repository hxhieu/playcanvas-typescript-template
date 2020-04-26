class HelloWorld extends pc.ScriptType {


    initialize() {
        // SO please keep
        console.log(this.app)
    }
}

// register the class as a script
pc.registerScript(HelloWorld)
