<style lang="scss" scoped></style>


<template>
    <div class="root"></div>
</template>

<script setup lang="ts">
interface Author {
    name: string
    mark: boolean
}

interface Paper {
    authors: Author[]
    title: string
    journal: string
    doi: string
}

export const papers: Paper[] = [
    {
        authors: [
            { name: 'Qianqian Shi', mark: false },
            { name: 'Keke He', mark: false },
            { name: 'Zhile Dang', mark: false },
            { name: 'Jing Zhang', mark: false },
            { name: 'Donghui Wei', mark: false },
            { name: 'Yu Lan', mark: false },
        ],
        title:
            'Prediction on origin of chemoselectivity for N-Heterocyclic carbene (NHC)-catalyzed radical relay reactions',
        journal: 'Journal of Catalysis, 455, 116702',
        doi: 'https://doi.org/10.1016/j.jcat.2026.116702',
    },
]
</script>