pipeline {
    agent any
    
    environment {
        ACR_NAME = 'portfolioacr112.azurecr.io'
        IMAGE_NAME = 'portfolio'
        INFRA_REPO = 'https://github.com/Isarthak26/portfolio_infra.git'
    }

    stages {
        stage('Clone Portfolio App') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/Isarthak26/portfolio_depl.git',
                    credentialsId: 'git_token'
            }
        }

        stage('Docker Build') {
            steps {
                sh 'docker build -t $ACR_NAME/$IMAGE_NAME:$BUILD_NUMBER .'
            }
        }

        stage('Push to ACR') {
            steps {
                withCredentials([usernamePassword(
                    credentialsId: 'acr-creds',
                    usernameVariable: 'USER',
                    passwordVariable: 'PASS'
                )]) {
                    sh '''
                        echo $PASS | docker login $ACR_NAME -u $USER --password-stdin
                        docker push $ACR_NAME/$IMAGE_NAME:$BUILD_NUMBER
                        docker tag $ACR_NAME/$IMAGE_NAME:$BUILD_NUMBER $ACR_NAME/$IMAGE_NAME:latest
                        docker push $ACR_NAME/$IMAGE_NAME:latest
                    '''
                }
            }
        }

        stage('Update Infra Repo') {
            steps {
                withCredentials([string(
                    credentialsId: 'git_token',
                    variable: 'TOKEN'
                )]) {
                    sh '''
                        rm -rf portfolio_infra
                        git clone https://$TOKEN@github.com/Isarthak26/portfolio_infra.git
                        cd portfolio_infra
                        sed -i "s|image:.*|image: $ACR_NAME/$IMAGE_NAME:$BUILD_NUMBER|" k8s/deployment.yaml
                        git config user.email "jenkins@ci.com"
                        git config user.name "Jenkins"
                        git add .
                        git commit -m "CI: update image to build $BUILD_NUMBER"
                        git push https://$TOKEN@github.com/Isarthak26/portfolio_infra.git main
                    '''
                }
            }
        }
    }

    post {
        success {
            echo '✅ Build pushed to ACR and infra repo updated! ArgoCD will now sync.'
        }
        failure {
            echo '❌ Pipeline failed! Check logs above.'
        }
    }
}
