pipeline {
    agent {
            docker {
                image 'qawolf/playwright-ci:v1.0.0'
            }
        }
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
                sh 'npm run testCase'
            }
            post {
                always {
                    allure includeProperties: false, jdk: '', results: [[path: 'allure-results']]
                }
            }
        }
    }
}