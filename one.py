import os
from dotenv import load_dotenv
from langchain_groq import ChatGroq

# Load environment variables
load_dotenv()

# Initialize LLM
llm = ChatGroq(model="llama3-8b-8192")

# Run query
response = llm.invoke("What is agentic AI? give me it in three lines")
print(response.content)
