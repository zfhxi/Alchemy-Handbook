module.exports = {
    define: {
      VITE_VALINE_APP_ID: process.env.VITE_VALINE_APP_ID,
      VITE_VALINE_APP_KEY: process.env.VITE_VALINE_APP_KEY,
    },
    title: "炼丹小本本",
    description: ' ',
    host: '0.0.0.0',
    port: 80,
    base: '/',
    dest: 'docs/.vuepress/dist',
    lang: 'zh-CN',
    plugins: [
        [
            '@vuepress/register-components',
            {
              componentsDir: './components'
            }
        ],
        ['vuepress-plugin-right-anchor',
            {
                expand: {
                    default: true,
                    trigger: 'click',
                },
                customClass: 'right-anchor',
            }
        ],
        ['vuepress-plugin-zooming',
            {
                options: {
                    bgColor: 'rgb(0, 0, 0)',
                    bgOpacity: 0.5,
                    scaleBase: 0.9,
                    transitionDuration: 0.2,
                }
            }
        ],
    ],
    markdown: {
        extractHeaders: ['h1', 'h2', 'h3', 'h4'],
    },
    themeConfig: {
        repo: 'https://github.com/zfhxi/Alchemy-Handbook',
        repoLabel: 'GitHub',
        docsDir: 'docs',
        docsBranch: 'main',
        editLinks: true,
        editLinkText: 'Edit on GitHub',
        smoothScroll: true,
        nav: [{
            text: "Notes",
            items: [
                {
                    text: "《Linux基操》",
                    link: "/basic_operations_of_linux/index"
                },
                {
                    text: "《编程奇技淫巧》",
                    link: "/programming_magic/index"
                }
            ]
        }],
        nextLinks: false,
        prevLinks: false,
        sidebarDepth: 0,
        sidebar: {
            "/basic_operations_of_linux/": [
                {
                    title: "《Linux基操》",
                    path: "/basic_operations_of_linux/"
                },
                {
                    title: "深度学习环境配置",
                    children: [
                        {
                            title: "CUDA/cuDNN安装",
                            path: "/basic_operations_of_linux/深度学习环境配置/01-cuda_cudnn_installation"
                        },
                        {
                            title: "Anaconda/Miniconda3安装",
                            path: "/basic_operations_of_linux/深度学习环境配置/02-anaconda_miniconda3_installation"
                        },
                        {
                            title: "pip/conda离线安装软件包",
                            path: "/basic_operations_of_linux/深度学习环境配置/03-pip_conda_install_pkg_offline"
                        },
                        {
                            title: "命令行安装Matlab R2017b",
                            path: "/basic_operations_of_linux/深度学习环境配置/04-install_matlab_r2017b"
                        }
                    ]
                },
                {
                    title: "Linux系统配置",
                    children: [
                        {
                            title: "Linux静态IP设定",
                            path: "/basic_operations_of_linux/Linux系统配置/01-linux_static_ip"
                        },
                        {
                            title: "服务器iptables规则配置简单版",
                            path: "/basic_operations_of_linux/Linux系统配置/02-server_iptables_simple"
                        },
                        {
                            title: "用户增删",
                            path: "/basic_operations_of_linux/Linux系统配置/03-user_add_del"
                        },
                        {
                            title: "校园内网联网",
                            path: "/basic_operations_of_linux/Linux系统配置/04-campus_network"
                        },
                        {
                            title: "Linux挂载硬盘",
                            path: "/basic_operations_of_linux/Linux系统配置/05-linux_mount_disk"
                        },
                        {
                            title: "Linux下CPU频率调整",
                            path: "/basic_operations_of_linux/Linux系统配置/06-linux_cpu_freq"
                        }
                    ]
                },
                {
                    title: "效率神器",
                    children: [
                        {
                            title: "tmux使用简记",
                            path: "/basic_operations_of_linux/效率神器/01-tmux"
                        },
                        {
                            title: "多设备实时同步工具syncthing",
                            path: "/basic_operations_of_linux/效率神器/02-syncthing"
                        },
                        {
                            title: "Linux配置ssh密钥对实现免密登录",
                            path: "/basic_operations_of_linux/效率神器/03-ssh_key_pair"
                        },
                        {
                            title: "PC和服务器间进行文件传输",
                            path: "/basic_operations_of_linux/效率神器/04-file_transfer_between_pc_and_server"
                        }
                    ]
                },
                {
                    title: "Shell零碎脚本",
                    children: [
                        {
                            title: "Shell识别是否为开机后的第一次ssh登陆",
                            path: "/basic_operations_of_linux/Shell零碎脚本/01-shell_first_ssh_login"
                        }
                    ]
                },
                {
                    title: "其他",
                    children: [
                        {
                            title: "Linux压缩命令速查",
                            path: "/basic_operations_of_linux/其他/01-linux_compress_command"
                        },
                        {
                            title: "Linux非root用户安装一些包",
                            path: "/basic_operations_of_linux/其他/02-linux_non_root_user_install_pkg"
                        },
                        {
                            title: "Linux通过进程名来杀死进程",
                            path: "/basic_operations_of_linux/其他/03-linux_kill_process_by_name"
                        },
                        {
                            title: "htop信息简介",
                            path: "/basic_operations_of_linux/其他/04-htop"
                        }
                    ]
                }
            ],
            "/programming_magic/": [
                {
                    title: "《02编程奇技淫巧》",
                    path: "/programming_magic/"
                },
                {
                    title: "调试",
                    children: [
                        {
                            title: "深度学习python代码使用pdb调试",
                            path: "/programming_magic/调试/01-pdb_debug_python_code"
                        }
                    ]
                }
            ]
        }
    }
}