pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                sh 'docker build -t faterek/portfolio-website .'
            }
        }
        stage('Deploy') {
            steps {
                sh 'docker stop portfolio-website && docker rm portfolio-website || echo "container does not exist"'
                configFileProvider([configFile(fileId: 'docker-config', variable: 'DOCKER_CONFIG')]) {
                    sh '''
                        source $DOCKER_CONFIG
                        docker run --name=portfolio-website --restart=always --network $DOCKER_NETWORK_NAME --ip $DOCKER_IP_ADDRESS -d faterek/portfolio-website
                    '''
                }	
            }
        }
        stage('Test') {
            steps {
                sh 'curl -sSf https://fater.eu.org > /dev/null && echo "Success"'
            }
        }
    }
}
