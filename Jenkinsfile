pipeline {
    agent any
    
    stages {
        stage('e-cup_edu update') {
            steps {
                sh 'ansible-playbook /var/lib/jenkins/ansible/e-cup_edu.yml -l hosting-9_25'
            }
        }
    }
}
