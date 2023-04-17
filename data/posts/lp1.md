---
title: 'Linear Programming - (1) Definitions and Convexity'
date: '2022-06-05'
keywords: ['next-js', 'tailwind', 'guide']
isDraft: true
image: "sample_20230220.webp"
summary: "Sample Blog Post입니다.\n 확인용으로 써주세요!"
length: "10 Min Read"
---

Linear Programming은 최적화 문제 중의 하나로 몇 개의 변수들에 대해서 여러 개의 선형 부등식이 주어져 있고, 주어진 선형
값에 대해서 최솟값 혹은 최댓값을 찾아야 하는 문제이다. 여기서는 Linear Programming의 정의와 잘 알려져 있는 성질 중 하나인
Convexity에 대해서 알아보고자 한다.

## Definitions

먼저, Linear Programming은 크게 3가지 형식으로 정의될 수 있다. 가장 기본이 되는 형식이 Canonical Form이다.
아래와 같이 Matrix Form으로 되어 있는 부등식과 음이 아닌 변수들에 대해서 정의된다.

### Canonical Form

$$
\begin{align*}
&\text{For given } \mathbf{A} \in \mathbb{R}^{n\times k}, \mathbf{c} \in \mathbb{R}^{k}, \mathbf{b} \in \mathbb{R}^{n} \\
&\text{Find } \mathbf{x} \in \mathbb{R}^k  \\
&\text{Maximize: }  \mathbf{c}^T\mathbf{x} \\
&\text{Subject to: } \mathbf{A}\mathbf{x} \leq \mathbf{b}, \mathbf{x}\geq \mathbf{0}
\end{align*}
$$

두번째 정의는 General Form이다. 이름에서 알 수 있듯이 모든 형태의 Linear Constraint가 가능하다.

### General Form

$$
\begin{align*}
&\text{For given } \mathbf{A_1} \in \mathbb{R}^{n_1\times k}, \mathbf{A_2} \in \mathbb{R}^{n_2\times k}, \mathbf{A_3} \in \mathbb{R}^{n_3\times k} ,\mathbf{c} \in \mathbb{R}^{k}, \mathbf{b} \in \mathbb{R}^{n} \\
&\text{Find } \mathbf{x} \in \mathbb{R}^k  \\
&\text{Maximize: }  \mathbf{c}^T\mathbf{x} \\
&\text{Subject to: } \mathbf{A_1}\mathbf{x} \leq \mathbf{b_1}, \mathbf{A_2}\mathbf{x_2} = \mathbf{b_2}, \mathbf{A_3}\mathbf{x} \geq \mathbf{b_3}
\end{align*}
$$

General Form을 Canoncial Form으로 다음과 같이 부등식의 부호를 바꾸거나, 등식을 부등식 2개로 쪼개어 변환할 수 있다.

$$
\mathbf{A} =
\begin{pmatrix}
    \mathbf{A_1} \\
    \mathbf{A_2} \\
    -\mathbf{A_2} \\
    -\mathbf{A_3} \\
\end{pmatrix},
\mathbf{b} =
\begin{pmatrix}
    \mathbf{b_1} \\
    \mathbf{b_2} \\
    -\mathbf{b_2} \\
    -\mathbf{b_3} \\
\end{pmatrix}
$$

또한, 모든 Variable들은 양수 부분과 음수 부분으로 쪼개는 것으로 $\mathbf{x} \geq \mathbf{0}$의 Constraint를 만족할 수 있다.

$$
x_i = x_i^+ - x_i^- (x_i^+, x_i^- \geq 0 \forall  i)
$$

세번째는 Standard Form으로 Linear Constraint들을 등식으로 표현되어 있는 형태를 말한다.

### Standard Form

$$
\begin{align*}
&\text{For given } \mathbf{A} \in \mathbb{R}^{n\times k}, \mathbf{c} \in \mathbb{R}^{k}, \mathbf{b} \in \mathbb{R}^{n} \\
&\text{Find } \mathbf{x} \in \mathbb{R}^k  \\
&\text{Maximize: }  \mathbf{c}^T\mathbf{x} \\
&\text{Subject to: } \mathbf{A}\mathbf{x} = \mathbf{b}, \mathbf{x}\geq \mathbf{0}
\end{align*}
$$

Canonical Form을 Standard Form으로 변환하기 위해서는 각 부등식에 새로운 *Slack Variable*을 도입하게 된다.

$$
\sum_j A_{ij}x_{j} + s_i = b_i (\forall i)
$$

$s_i \geq 0$을 만족하기 때문에 $\mathbf{x}' = (x_1, x_2, \dots x_k, s_1, s_2, \dots s_n)$에 대한 Standard Form이 되게 된다.

## Convexity

Linear Programming의 Constraint를 만족하는 해들을 *Feasible Solution*이라고 부르는데, 이들의 집합
$P$가 Convexity를 가지게 된다.

Canonical Form에 대해서 Convexity를 증명하기 위해서는 Constraint를 만족하는 점들의 내분점 역시
Feasible Solution을 증명할 수 있다.

$$
\begin{align*}
\mathbf{A}(\lambda \mathbf{x} +(1- \lambda) \mathbf{y})
&\leq \lambda \mathbf{Ax} +(1-\lambda) \mathbf{Ay} \\
&\leq \lambda \mathbf{b} + (1-\lambda) \mathbf{b} \\
&= \mathbf{b}
\end{align*}
$$

따라서, Convexity 성질 때문에 Feasible Region은 볼록다각형이 된다. Objective 역시 선형이기 때문에,
볼록다각형 내부의 점이 아닌 경계에 있는 점, 꼭짓점에서 극값을 갖게 된다.