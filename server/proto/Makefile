all: clean proto

PROTOC_GEN_TS_PATH = ./node_modules/.bin/protoc-gen-ts
GRPC_TOOLS_NODE_PROTOC_PLUGIN = ./node_modules/.bin/grpc_tools_node_protoc_plugin
GRPC_TOOLS_NODE_PROTOC = ./node_modules/.bin/grpc_tools_node_protoc

lint:
			buf check lint
proto:
			${GRPC_TOOLS_NODE_PROTOC} \
					--js_out=import_style=commonjs,binary:./generated \
					--grpc_out=./generated \
					--plugin=protoc-gen-grpc="${GRPC_TOOLS_NODE_PROTOC_PLUGIN}" \
					-I ./rpc \
						./rpc/*.proto ./rpc/*/*.proto

			${GRPC_TOOLS_NODE_PROTOC} \
					--plugin=protoc-gen-ts="${PROTOC_GEN_TS_PATH}" \
					--ts_out=./generated \
					-I ./rpc \
					./rpc/*.proto ./rpc/*/*.proto
			
			cp -r ./generated/* ../api/src/rpc
clean:
			rm -rf generated/*.d.ts generated/*.js generated/models
