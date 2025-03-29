pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/Mustafa1121/node-jenkins.git'
            }
        }
        
        stage('Install Dependencies') {
    steps {
        script {
            // Forcefully remove node_modules and package-lock.json
            bat 'if exist node_modules rmdir /S /Q node_modules'
            bat 'if exist package-lock.json del /F /Q package-lock.json'
            
            // Install dependencies
            powershell 'npm install --force'
        }
    }
}


        stage('Run Tests') {
            steps {
                powershell 'npm test'
            }
        }
        
        stage('Build') {
            steps {
                powershell 'echo "Build completed!"'
            }
        }
    }
}
