pipeline {
    agent {
            docker {
                image 'qawolf/playwright-ci:v1.0.0'
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