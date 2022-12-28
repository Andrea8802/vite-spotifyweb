<script>

export default {
    name: "AppFooter"

}
</script>

<template>

    <footer>
        <div class="foot left">
            <img src="src/assets/img/sinister.jpeg" alt="Cover Preview" class="cover-preview">
            <span class="preview-info">
                <div class="music">
                    Sinister
                </div>
                <div class="artist">
                    <a href="#">
                        Brano Nome
                    </a>
                </div>
            </span>
            <span class="icon">
                <fa icon="fa-regular fa-heart" />
                <fa icon="fa-regular fa-folder" />
            </span>
        </div>

        <div class="foot center">
            <div class="icon">
                <fa icon="fa-solid fa-shuffle" />
                <fa icon="fa-solid fa-backward-step" />
                <fa icon="fa-regular fa-circle-play" id="play" />
                <fa icon="fa-solid fa-forward-step" />
                <fa icon="fa-solid fa-rotate-right" />
            </div>
            <br>
            <div class="bar-section">
                <span>
                    0:25
                </span>
                <div class="bar">
                    <div class="light-bar">
                        <div class="point"></div>
                    </div>
                </div>
                <span>
                    4:35
                </span>
            </div>
        </div>

        <div class="foot right">
            <div class="icon">
                <fa icon="fa-solid fa-list-ul" />
                <fa icon="fa-solid fa-display" />
                <fa icon="fa-solid fa-volume-high" />
            </div>

            <div class="bar">
                <div class="light-bar">
                    <div class="point"></div>
                </div>
            </div>
        </div>
    </footer>

</template>

<style lang="scss" scoped>
@use '../styles/partials/mixins' as *;

footer {
    height: 90px;
    padding: 0 15px;
    @include d-flex(space-between, center);
    background-color: #282828;

    .foot {
        width: 25%;
        height: 100%;
        display: flex;
        align-items: center;
    }

    .foot.left {
        img {
            height: 50%;
            margin-right: 10px;
        }

        .icon {
            color: gray;
            margin-left: 40px;
            cursor: pointer;

            * {
                margin-left: 15px;
            }

            &:hover {
                color: white;
            }
        }

        .music {
            color: white;
            font-weight: bold;
            font-size: 13px;
        }

        .artist a {
            color: gray;
            font-weight: bold;
            font-size: 10px;

            &:hover {
                text-decoration: underline;
                color: white;
            }
        }
    }


    .foot.center {
        width: 50%;
        height: 100%;
        flex-direction: column;
        justify-content: center;
        gap: 5px;

        .icon {
            color: white;
            font-size: 20px;
            display: flex;
            align-items: center;
            gap: 20px;
            height: 20%;
        }

        #play {
            font-size: 30px;
            margin: 0 10px;

            &:hover {
                font-size: 34px;
            }
        }

        .bar-section {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 20px;
            color: lightgray;
            font-size: 10px;
            font-weight: bold;
            height: 20%;
            width: 100%;

            .bar {
                width: 60%;

                .light-bar {
                    width: 20%;
                }


            }
        }
    }

    .foot.right {
        justify-content: flex-end;
        gap: 20px;

        .icon {
            color: var(--dark-white);
            font-size: 14px;
            display: flex;
            gap: 20px;
            cursor: pointer;

            &:hover {
                color: white;
            }
        }

        .bar {
            width: 130px;

            .light-bar {
                width: 20%;
            }
        }
    }
}

.bar {
    background-color: #5a5a5a;
    height: 4px;
    border-radius: 30px;
    cursor: pointer;

    &:hover .point {
        display: block;
    }

    &:hover .light-bar {
        background-color: #adff2f;
    }

    .light-bar {
        background-color: var(--dark-white);
        height: 4px;
        border-radius: 30px;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        transition: all 0.3s ease;
    }

    .point {
        background-color: white;
        height: 13px;
        width: 13px;
        border-radius: 50%;
        display: none;
    }

}


/* L Version */
@media screen and (max-width: 1080px) {

    .foot.left .icon {
        margin-left: 16px;
    }
}

/* MD Version */
@media screen and (max-width: 820px) {
    .foot.left .icon {
        font-size: 15px;
        margin-left: 0px;
    }

    .foot.right .bar {
        width: 80px;
    }

    .foot.right .icon {
        font-size: 12px;
    }

    .foot.center .icon {
        font-size: 15px;
    }

    #play {
        font-size: 25px;
    }

}

/* MD 2 Version */
@media screen and (max-width: 730px) {
    .foot.right .bar {
        display: none;
    }

    .preview-info {
        display: none;
    }
}


/* S Version */
@media screen and (max-width: 642px) {
    .foot.left .cover-preview {
        display: none;
    }

    footer .foot.left .icon {
        margin-left: 0px;
    }
}

/* XS Version */
@media screen and (max-width: 440px) {

    .foot.right .icon {
        flex-direction: column;
    }

    .foot.left .icon {
        display: block;
        margin: 5px 0;
    }

    .foot.center .bar-section span {
        display: none;
    }

    .foot.center .bar {
        width: 100%;
    }

    .foot.center .icon {
        font-size: 13px;
    }

    #play {
        font-size: 23px;
    }
}

@media screen and (max-width: 360px) {

    .foot.left,
    .foot.right {
        display: none;
    }

    footer {
        justify-content: center;
    }


}
</style>