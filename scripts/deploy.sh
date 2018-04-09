sam package --template-file template.yaml --s3-bucket basketballbucket --output-template-file ./build/packaged.yaml
sam deploy --template-file ./build/packaged.yaml --stack-name basketballsim