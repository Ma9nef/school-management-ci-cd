pipeline {
    agent any

    tools {
        jdk 'JDK17'
        maven 'MAVEN3'
        nodejs 'NODE20'
    }

    stages {

        stage('Checkout') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/Ma9nef/school-management-ci-cd.git'
            }
        }

        stage('Build Frontend') {
            steps {
                dir('frontend') {
                    sh 'npm install'
                    sh 'ng build --configuration production'
                }
            }
        }

        stage('Build Backend') {
            steps {
                dir('backend') {
                    sh 'mvn clean package -DskipTests'
                }
            }
        }

        stage('Archive Artifacts') {
            steps {
                archiveArtifacts artifacts: 'backend/target/*.jar', fingerprint: true
                archiveArtifacts artifacts: 'frontend/dist/**/*', fingerprint: true
            }
        }
    }

    post {
        success { echo "🚀 Build successful !" }
        failure { echo "❌ Build failed" }
    }
}
