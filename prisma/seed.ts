import prisma from '../lib/prisma'

async function main() {
  const response = await Promise.all([
    prisma.currencies.upsert({
      where: { code: 'btc' },
      update: {},
      create: {
        name: 'Bitcoin',
        code: 'btc',
        icon: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48Y2lyY2xlIGN4PSIxNiIgY3k9IjE2IiByPSIxNiIgZmlsbD0iI0Y3OTMxQSIvPjxwYXRoIGZpbGw9IiNGRkYiIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTIzLjE4OSAxNC4wMmMuMzE0LTIuMDk2LTEuMjgzLTMuMjIzLTMuNDY1LTMuOTc1bC43MDgtMi44NC0xLjcyOC0uNDMtLjY5IDIuNzY1Yy0uNDU0LS4xMTQtLjkyLS4yMi0xLjM4NS0uMzI2bC42OTUtMi43ODNMMTUuNTk2IDZsLS43MDggMi44MzljLS4zNzYtLjA4Ni0uNzQ2LS4xNy0xLjEwNC0uMjZsLjAwMi0uMDA5LTIuMzg0LS41OTUtLjQ2IDEuODQ2czEuMjgzLjI5NCAxLjI1Ni4zMTJjLjcuMTc1LjgyNi42MzguODA1IDEuMDA2bC0uODA2IDMuMjM1Yy4wNDguMDEyLjExLjAzLjE4LjA1N2wtLjE4My0uMDQ1LTEuMTMgNC41MzJjLS4wODYuMjEyLS4zMDMuNTMxLS43OTMuNDEuMDE4LjAyNS0xLjI1Ni0uMzEzLTEuMjU2LS4zMTNsLS44NTggMS45NzggMi4yNS41NjFjLjQxOC4xMDUuODI4LjIxNSAxLjIzMS4zMThsLS43MTUgMi44NzIgMS43MjcuNDMuNzA4LTIuODRjLjQ3Mi4xMjcuOTMuMjQ1IDEuMzc4LjM1N2wtLjcwNiAyLjgyOCAxLjcyOC40My43MTUtMi44NjZjMi45NDguNTU4IDUuMTY0LjMzMyA2LjA5Ny0yLjMzMy43NTItMi4xNDYtLjAzNy0zLjM4NS0xLjU4OC00LjE5MiAxLjEzLS4yNiAxLjk4LTEuMDAzIDIuMjA3LTIuNTM4em0tMy45NSA1LjUzOGMtLjUzMyAyLjE0Ny00LjE0OC45ODYtNS4zMi42OTVsLjk1LTMuODA1YzEuMTcyLjI5MyA0LjkyOS44NzIgNC4zNyAzLjExem0uNTM1LTUuNTY5Yy0uNDg3IDEuOTUzLTMuNDk1Ljk2LTQuNDcuNzE3bC44Ni0zLjQ1Yy45NzUuMjQzIDQuMTE4LjY5NiAzLjYxIDIuNzMzeiIvPjwvZz48L3N2Zz4=',
        price: 27893.93,
      },
    }),
    prisma.currencies.upsert({
      where: { code: 'doge' },
      update: {},
      create: {
        name: 'Dogecoin',
        code: 'doge',
        icon: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48Y2lyY2xlIGN4PSIxNiIgY3k9IjE2IiByPSIxNiIgZmlsbD0iI0MzQTYzNCIvPjxwYXRoIGZpbGw9IiNGRkYiIGQ9Ik0xMy4yNDggMTQuNjFoNC4zMTR2Mi4yODZoLTQuMzE0djQuODE4aDIuNzIxYzEuMDc3IDAgMS45NTgtLjE0NSAyLjY0NC0uNDM3LjY4Ni0uMjkxIDEuMjI0LS42OTQgMS42MTUtMS4yMWE0LjQgNC40IDAgMDAuNzk2LTEuODE1IDExLjQgMTEuNCAwIDAwLjIxLTIuMjUyIDExLjQgMTEuNCAwIDAwLS4yMS0yLjI1MiA0LjM5NiA0LjM5NiAwIDAwLS43OTYtMS44MTVjLS4zOTEtLjUxNi0uOTMtLjkxOS0xLjYxNS0xLjIxLS42ODYtLjI5Mi0xLjU2Ny0uNDM3LTIuNjQ0LS40MzdoLTIuNzIxdjQuMzI1em0tMi43NjYgMi4yODZIOXYtMi4yODVoMS40ODJWOGg2LjU0OWMxLjIxIDAgMi4yNTcuMjEgMy4xNDIuNjI3Ljg4NS40MTkgMS42MDcuOTkgMi4xNjggMS43MTUuNTYuNzI0Ljk3NyAxLjU3MiAxLjI1IDIuNTQzLjI3My45NzEuNDA5IDIuMDEuNDA5IDMuMTE1YTExLjQ3IDExLjQ3IDAgMDEtLjQxIDMuMTE1Yy0uMjcyLjk3LS42ODkgMS44MTktMS4yNSAyLjU0My0uNTYuNzI1LTEuMjgyIDEuMjk2LTIuMTY3IDEuNzE1LS44ODUuNDE4LTEuOTMzLjYyNy0zLjE0Mi42MjdoLTYuNTQ5di03LjEwNHoiLz48L2c+PC9zdmc+',
        price: 0.06472,
      },
    }),
    prisma.currencies.upsert({
      where: { code: 'eth' },
      update: {},
      create: {
        name: 'Ethereum',
        code: 'eth',
        icon: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48Y2lyY2xlIGN4PSIxNiIgY3k9IjE2IiByPSIxNiIgZmlsbD0iIzYyN0VFQSIvPjxnIGZpbGw9IiNGRkYiIGZpbGwtcnVsZT0ibm9uemVybyI+PHBhdGggZmlsbC1vcGFjaXR5PSIuNjAyIiBkPSJNMTYuNDk4IDR2OC44N2w3LjQ5NyAzLjM1eiIvPjxwYXRoIGQ9Ik0xNi40OTggNEw5IDE2LjIybDcuNDk4LTMuMzV6Ii8+PHBhdGggZmlsbC1vcGFjaXR5PSIuNjAyIiBkPSJNMTYuNDk4IDIxLjk2OHY2LjAyN0wyNCAxNy42MTZ6Ii8+PHBhdGggZD0iTTE2LjQ5OCAyNy45OTV2LTYuMDI4TDkgMTcuNjE2eiIvPjxwYXRoIGZpbGwtb3BhY2l0eT0iLjIiIGQ9Ik0xNi40OTggMjAuNTczbDcuNDk3LTQuMzUzLTcuNDk3LTMuMzQ4eiIvPjxwYXRoIGZpbGwtb3BhY2l0eT0iLjYwMiIgZD0iTTkgMTYuMjJsNy40OTggNC4zNTN2LTcuNzAxeiIvPjwvZz48L2c+PC9zdmc+',
        price: 1744.59,
      },
    }),
  ])
  console.log(response)
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
