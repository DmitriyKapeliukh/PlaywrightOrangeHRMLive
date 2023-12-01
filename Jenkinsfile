pipeline {
agent any
environment {
    NPM_CONFIG_CACHE = "${WORKSPACE}/.npm"
}
    stages {
        stage('Run Test') {
        agent {
            docker {
                image 'mcr.microsoft.com/playwright:v1.40.0-jammy'
                reuseNode true
                }
                }
            steps {
                script {
                            try {
                                sh 'npm ci'
                                sh 'npm run testCase'
                                stash name: 'allure-results', includes: 'allure-results/*'
                                currentBuild.result = 'SUCCESS'
                            } catch (e) {
                                stash name: 'allure-results', includes: 'allure-results/*'
                                currentBuild.result = 'FAILED'
                                throw e
                            }
                        }
            }
        }
    }
    post {
          always {
            unstash 'allure-results' //extract results
            script {
                allure([
                includeProperties: false,
                jdk: '',
                properties: [],
                reportBuildPolicy: 'ALWAYS',
                results: [[path: 'allure-results']]
            ])
            }
            }
          }
}