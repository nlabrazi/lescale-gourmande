@Library('nabster-ci') _

pipeline {
    agent {
        docker {
            image 'node:22.23.3'
        }
    }

    stages {
        stage('Notify start') {
            steps {
                notifyTelegram('started')
            }
        }

        stage('Install') {
            steps {
                npmCi()
            }
        }

        stage('Check') {
            steps {
                sh 'npm run check'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
    }

    post {
        success {
            notifyTelegram('success')
        }

        failure {
            notifyTelegram('failed')
        }
    }
}
