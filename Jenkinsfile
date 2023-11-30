pipeline {
    agent {
            docker {
                image 'mcr.microsoft.com/playwright:v1.17.2-focal'
            }
        }
    stages {
        stage('Build') {
            steps {
                git 'https://github.com/DmitriyKapeliukh/PlaywrightOrangeHRMLive'
                sh 'npm install'
                sh 'npm run testCase'
            }
            post {
                always {
                    allure includeProperties: false, jdk: '', results: [[path: 'build/allure-results']]
                }
            }
        }
    }
}