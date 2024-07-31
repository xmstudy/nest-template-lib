#!/usr/bin/env sh

# 目标文件路径
TARGET_FILE=".husky/pre-commit"

# 检查目标文件是否存在
if [ ! -f "$TARGET_FILE" ]; then
  # 创建目标文件并写入内容
  mkdir -p "$(dirname -- "$TARGET_FILE")"  # 确保目录存在
  echo '#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

pnpm lint-staged' > "$TARGET_FILE"
  # 赋予执行权限
  chmod +x "$TARGET_FILE"
else
  echo "File already exists: $TARGET_FILE"
fi
