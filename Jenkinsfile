pipeline {
agent { docker { image 'mcr.microsoft.com/playwright:v1.40.0-jammy' } }
    stages {
        stage('Build') {
            steps {
                sh 'npm ci'
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