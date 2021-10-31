FROM gitpod/workspace-full

RUN sudo curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip" \
  && unzip awscliv2.zip \
  && sudo ./aws/install \
  && sudo apt-get update \
  && brew install pandoc \
  && brew install aws-vault \
  && pip install aws-sam-cli