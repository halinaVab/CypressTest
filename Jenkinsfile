pipeline {
    agent any

    tools {nodejs "nodejs"}
    
    stages {
        stage('build') {
            steps {
                sh 'npm install'
            }
        }
        stage('parallel') {
            parallel {
                // start several test jobs in parallel, and they all
                // will use Cypress Dashboard to load balance any found spec files
                stage('Run tests in parallel A') {
                    steps {
                        sh 'npx cypress run --record --key 0d167392-db2d-44e0-931e-27f7dc0c6f9e --parallel'
                    }
                }
                stage('Run tests in parallel B') {
                    steps {
                        sh 'npx cypress run --record --key 0d167392-db2d-44e0-931e-27f7dc0c6f9e --parallel'
                    }
                }
            }
        }
    }
}