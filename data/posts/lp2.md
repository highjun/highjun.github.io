---
title: 'Linear Programming - (2) Simplex Method'
date: '2022-06-05'
keywords: ['next-js', 'tailwind', 'guide']
isDraft: true
image: "sample_20230220.webp"
summary: "Sample Blog Post입니다.\n 확인용으로 써주세요!"
length: "10 Min Read"
---

Linear Programming을 푸는 가장 쉬운 알고리즘은 Simplex Algorithm으로 다음의 Step을 거쳐서 더 큰 값을 갖게 되는
Feasible Solution을 반복적으로 찾아나가는 알고리즘이다.

## Step 1. Initial Feasible Solution

먼저, $\mathbf{Ax} \leq \mathbf{b}, \mathbf{b} \geq 0$ 인 Canonical Form에 대해서 다룬다고 한다면, Slack Variable($\mathbf{s}$)들을 도입하는 것으로
각각의 $\mathbf{s} =\mathbf{b}, \mathbf{x} = \mathbf{0}$에서부터 시작할 수 있다. 하지만, 이것은 특수한 경우로, General Form에 대한 Solution을 구해야 한다는
점까지 고려하면 Initial Feasible Solution을 구하는 것조차 어려운 일이 된다.

이 문제는 Artificial Variable $\mathbf{y}$를 도입하는 것으로 해결 할 수 있다. 기존의 General Form과 Canoncial Form에서 Standard Form으로의 변환은 Slack Variable 등을
도입하면 어렵지 않으므로 Standard Form에서의 문제를 바라볼 수 있다. 또한, $b_i$ 음수값을 가지는 row의 부호를 바꾸어줌으로써 일반성을 잃지 않고 $\mathbf{b} \geq 0$인 상황에 대해서만 생각해도 충분하다.

$$
\begin{align*}
&\text{For given } \mathbf{A} \in \mathbb{R}^{n\times k}, \mathbf{c} \in \mathbb{R}^{k}, \mathbf{b} \in \mathbb{R}^{n} \\
&\text{Find } \mathbf{x} \in \mathbb{R}^k  \\
&\text{Maximize: }  \mathbf{c}^T\mathbf{x} \\
&\text{Subject to: } \mathbf{A}\mathbf{x} = \mathbf{b}, \mathbf{x}\geq \mathbf{0}
\end{align*}
$$

위의 식에서 $\mathbf{Ax} = \mathbf{b}$를 풀기 어려우므로 $\mathbf{Ax} + \mathbf{y} = \mathbf{b}$로 Artifical Variable들을 도입할 수 있다.
$\mathbf{y \geq 0}$ 이상에서 $\mathbf{y} = \mathbf{b}$ 라는 해를 가지므로 여기서부터 Simplex Method를 적용하여 다음의 문제를 해결하도록 한다.

$$
\begin{align*}
&\text{For given } \mathbf{A} \in \mathbb{R}^{n\times k}, \mathbf{b} \in \mathbb{R}^{n} \\
&\text{Find } \mathbf{x} \in \mathbb{R}^k, \mathbf{y} \in \mathbb{R}^{n+k}  \\
&\text{Minimize: }  \mathbf{1}^T\mathbf{y} \\
&\text{Subject to: } \mathbf{Ax} + \mathbf{y} = \mathbf{b}, (\mathbf{x}, \mathbf{y}) \geq \mathbf{0}
\end{align*}
$$

이 문제의 Optimal Solution의 값이 $0$이라면, 그 때의 $\mathbf{x}$가 Feasible Solution이 될 것이고, 그렇지 않다면 해당 문제의 Feasible Solution이 없는 것을 알 수 있다.

## Step 2. Simplex Tableau 구성

우리가 가지고 있는 Linear Constraint에 대하여 아래와 같이 Table을 만든다. $z$는 우리가 찾는 Objective의 값이 될 변수로
$z - \mathbf{c^Tx} = 0$의 등식을 만족하도록 마지막 Row에 추가되었다.

|  $x_1$   |  $x_2$   | $\dots$  |  $x_k$   |   $z$    |  $b$  |
| :------: | :------: | :------: | :------: | :------: | :---: |
| $A_{11}$ | $A_{12}$ | $\dots$  | $A_{1k}$ |   $0$    | $b_1$ |
| $A_{21}$ | $A_{22}$ | $\dots$  | $A_{2k}$ |   $0$    | $b_2$ |
|          |          | $\vdots$ |          | $\vdots$ |       |
| $A_{n1}$ | $A_{n2}$ | $\dots$  | $A_{nk}$ |   $0$    | $b_n$ |
|  $-c_1$  |  $-c_2$  | $\dots$  | $-c_{k}$ |   $1$    |  $0$  |

이 때, 앞서 구한 Feasible Solution의 $0$이 아닌 변수들은 각각 1개의 Row에 대해서는 $1$값을 갖고, 나머지 Row에 대해서는 $0$의 값을 갖도록 된다. 또한, $b$에 해당하는 Column은 모두 $0$이상이 된다.
이 조건을 Basic Feasible Solution이라고 부르고, 이를 유지하면서 계속해서 더 나은 해를 찾아갈 것이다.

## Step 3. Pivoting

마지막 Row에서 음수 값을 가지는 Column $j$가 있고, 해당 Column의 모든 계수가 음수라면, 해당 Column의 변수 값을 무한히 키울 수 있어서 우리가 찾는 Objective는 Unbounded임을 알 수 있다.

만약 모든 계수가 음수가 아니라면, $\argmin_i \frac{b_i}{A_{ij}} = \hat{i}$을 계산한다. 이후 $\hat{i}$ 행의 $j$ Column값이 $1$이고, 나머지는 $0$이 되도록 $\hat{i}$ 행을 다른 행들에 더해주는 작업을
진행할 수 있고, 이를 Pivoting이라고 한다. 이 때, $b_{\hat{i}}$ 값이 $0$ 이상이고, 마지막 Row의 계수는 음수였으므로, 마지막 Row의 값은 증가하게 된다. 또한, $\frac{b_i}{A_{ij}}$가 최소가 되도록 잡았으므로 Pivoting 과정에서
다른 Row들의 $b_i$ 역시 $0$이상을 유지하게 된다.

Step 3는 마지막 Row에 더 이상 음수 값이 없거나, Column의 모든 값이 음수가 되기 전까지 반복하게 되고 전자에 해당하여 반복이 끝나면 Optimal Solution을 찾을 수 있게 된다.

## Correctness

이 알고리즘이 실제로 Optimal Solution을 구해주는 지 증명할 차례이다. 이는 크게 2가지로 나눌 수 있다.

- Step 3 에서 반복이 계속되지 않는지?
- Step 3에서 반복이 끝나면 그것이 최댓값인지?

먼저, 첫 번째의 경우에는 마지막 Row의 Objective가 계속 증가한다는 점, 그리고 증가하기 때문에 Basic Feasible Solution의 $0$이 아니게 되는 Variable의 set이 최대 한 번 나올 수 있다는 점에서 Step 3는 반복이 끝날 수 있다.
이로 인해서 최악의 경우 모든 가능한 Basic Feasible Solution의 조합을 모두 거쳐야 해서 Exponential Time의 Complexity를 갖지만, 실제로는 이보다 훨씬 짧은 시간에 거의 끝나게 된다.
여기에 더해, 만약에 $b_i = 0$인 $i$가 존재한다면, Objective가 증가하지 않기 때문에 문제가 될 수 있는 데, 이를 Degenerate Case라고 부른다. 이 경우에 대해서는 추가적으로 장치를 하여 보완이 필요하다.

두 번째의 경우에 대해서는 마지막 Row에 더 이상 음수 값이 없게 되었다는 뜻이고, 모든 계수가 $0$이상이고, 변수 역시 $0$이상이므로 $z = b - \sum c_ix_i \leq b$를 만족하게 되어 $b$가 최댓값이라는 것을 알 수 있다.