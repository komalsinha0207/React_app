pipeline {
    agent {label 'agent' }
    tools { nodejs 'NodeJS'}

    environment {
        CI = 'true'
        //password = credentials('password')
        registry = 'docker-services-training/aleesha/'
        }
    stages {
         stage('Required dependancies') {
             steps {
                 sh 'npm install'
                 sh 'node --version' 
                 sh 'npm --version'
             }
         }
         stage('Test') {
             steps {
                 sh 'chmod +x ./jenkins/scripts/test.sh'
                 sh './jenkins/scripts/test.sh'
             }
         }
         stage('Build') {
             steps {
                 sh 'npm run build'
                
             }
         }
         stage('Build & Publish the image') { 
            steps { 
                script {
                    docker.withTool('docker') {
                        docker.withRegistry('https://artifactory.dagility.com', 'aleesha-registry'){
                            docker.build(registry + "react_app:latest").push()
                        }
                    }
                } 
            }
        }
        stage('Execute ansible playbook') {
            steps {
                ansiblePlaybook (
                credentialsId: 'aleesha-private-key',
                disableHostKeyChecking: true,
                extraVars: [password : "${params.registry_pass}", test : 123],
                installation: 'ansible',
                inventory: 'ansible/inventory.ini',
                playbook: 'ansible/docker-test.yml')
            }
        }  
    }
}
