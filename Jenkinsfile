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
                powershell 'npm install'
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
