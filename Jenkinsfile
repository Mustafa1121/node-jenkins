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
                    try {
                        // Clear existing node_modules and package-lock.json before installing
                        bat 'del /Q node_modules\\*'
                        bat 'rmdir /S /Q node_modules'
                        bat 'del /Q package-lock.json'

                        // Run npm install
                        powershell 'npm install'
                    } catch (Exception e) {
                        currentBuild.result = 'FAILURE'
                        throw e
                    }
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
